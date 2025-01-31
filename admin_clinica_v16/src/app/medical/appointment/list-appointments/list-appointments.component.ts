import { Component } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { MatTableDataSource } from '@angular/material/table';

declare var $: any;

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss'],
})
export class ListAppointmentsComponent {
  public appointmentList: any = [];
  dataSource!: MatTableDataSource<any>;

  public specialitie_id = '';
  public date = null;

  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 8;
  public totalData = 0;
  public skip = 0; //MIN
  public limit: number = this.pageSize; //MAX
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<any> = [];
  public totalPages = 0;

  public patient_generals: any = [];
  public appointment_selected: any;

  specialities: any = [];

  constructor(public appointmentService: AppointmentService) {}
  ngOnInit() {
    this.getTableData();

    this.appointmentService.listConfig().subscribe((resp: any) => {
      this.specialities = resp.specialities;
    });
  }

  private updateSerialNumberArray(): void {
    const start = this.skip + 1; // Primer elemento en la página actual
    const end = Math.min(this.skip + this.pageSize, this.totalData); // Último elemento en la página actual

    this.serialNumberArray = [start, end];
  }

  private getTableData(page = 1): void {
    this.appointmentList = [];
    this.pageSelection = [];

    this.appointmentService
      .listAppointments(
        page,
        this.searchDataValue,
        this.specialitie_id,
        this.date
      )
      .subscribe((resp: any) => {
        console.log(resp);

        this.totalData = resp.total;
        this.appointmentList = resp.appointments.data;

        this.dataSource = new MatTableDataSource<any>(this.appointmentList);
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.updateSerialNumberArray(); // Actualiza el rango mostrado
      });
  }

  selectUser(rol: any) {
    this.appointment_selected = rol;
  }

  deleteAppointment() {
    this.appointmentService
      .deleteAppointment(this.appointment_selected.id)
      .subscribe((resp: any) => {
        console.log(resp);
        console.log(resp);
        const INDEX = this.appointmentList.findIndex(
          (item: any) => item.id == this.appointment_selected.id
        );
        if (INDEX != -1) {
          this.appointmentList.splice(INDEX, 1);

          $('#delete_patient').hide();
          $('#delete_patient').removeClass('show');
          $('.modal-backdrop').remove();
          $('body').removeClass();
          $('body').removeAttr('style');

          this.appointment_selected = null;
          //
          this.appointmentList = [];
          this.pageSelection = [];

          this.appointmentService
            .listAppointments(
              1,
              this.searchDataValue,
              this.specialitie_id,
              this.date
            )
            .subscribe((resp: any) => {
              console.log(resp);

              this.totalData = resp.total;
              this.appointmentList = resp.appointments.data;

              this.dataSource = new MatTableDataSource<any>(
                this.appointmentList
              );
              this.calculateTotalPages(this.totalData, this.pageSize);
              this.updateSerialNumberArray(); // Actualiza el rango mostrado
            });
        }
      });
  }

  public searchData() {
    // this.dataSource.filter = value.trim().toLowerCase();
    // this.appointmentList = this.dataSource.filteredData;
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;

    this.getTableData();
  }

  public sortData(sort: any) {
    const data = this.appointmentList.slice();

    if (!sort.active || sort.direction === '') {
      this.appointmentList = data;
    } else {
      this.appointmentList = data.sort((a: any, b: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData(this.currentPage);
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData(this.currentPage);
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData(this.currentPage);
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.searchDataValue = '';
    this.specialitie_id = '';
    this.date = null;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    /* eslint no-var: off */
    for (var i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
}
