/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.scss'],
})
export class AddAppointmentsComponent {
  hours: any = [];
  specialities: any = [];
  date_appointment: any;
  hour: any;
  specialitie_id: any;

  name: string = '';
  surname: string = '';
  mobile: string = '';
  n_document: number = 0;
  name_companion: string = '';
  surname_companion: string = '';

  amount: number = 0;
  amount_add: number = 0;
  method_payment: string = '';

  DOCTORS: any = [];
  DOCTOR_SELECTED: any;
  selected_segment_hour: any;

  public text_success: string = '';
  public text_validation: string = '';

  constructor(public appointmentService: AppointmentService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appointmentService.listConfig().subscribe((resp: any) => {
      console.log(resp);
      this.hours = resp.hours;
      this.specialities = resp.specialities;
    });
  }

  save() {
    this.text_validation = '';

    if (this.amount < this.amount_add) {
      this.text_validation =
        'El monto ingresado como adelanto no puede ser mayor al costo de la cita médica.';
      return;
    }

    if (
      !this.name ||
      !this.surname ||
      !this.mobile ||
      !this.n_document ||
      !this.name_companion ||
      !this.surname_companion ||
      !this.date_appointment ||
      !this.specialitie_id ||
      !this.selected_segment_hour ||
      !this.amount ||
      !this.amount_add ||
      !this.method_payment
    ) {
      this.text_validation = 'Los campos con * son obligatorios.';
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const data = {
      doctor_id: this.DOCTOR_SELECTED.doctor.id,
      // "patient_id",
      name: this.name,
      surname: this.surname,
      mobile: this.mobile,
      n_document: this.n_document,
      name_companion: this.name_companion,
      surname_companion: this.surname_companion,
      date_appointment: this.date_appointment,
      specialitie_id: this.specialitie_id,
      doctor_schedule_join_hour_id: this.selected_segment_hour.id,
      amount: this.amount,
      amount_add: this.amount_add,
      method_payment: this.method_payment,
      user_email: user.email, // Enviar el email del usuario autenticado
    };

    this.appointmentService.registerAppointment(data).subscribe((resp: any) => {
      console.log(resp);

      this.text_success = 'La cita médica se registró con éxito';
    });
  }

  filtro() {
    const data = {
      date_appointment: this.date_appointment,
      hour: this.hour,
      specialitie_id: this.specialitie_id,
    };
    this.appointmentService.listFilter(data).subscribe((resp: any) => {
      console.log(resp);
      this.DOCTORS = resp.doctors;
    });
  }

  countDisponibilidad(DOCTOR: any) {
    let SEGMENTS = [];
    SEGMENTS = DOCTOR.segments.filter((item: any) => !item.is_appointment);
    return SEGMENTS.length;
  }

  showSegment(DOCTOR: any) {
    this.DOCTOR_SELECTED = DOCTOR;
  }

  selectSegment(SEGMENT: any) {
    this.selected_segment_hour = SEGMENT;
  }

  filterPatient() {
    this.appointmentService
      .listPatient(this.n_document + '')
      .subscribe((resp: any) => {
        console.log(resp);
        if (resp.message == 403) {
          this.name = '';
          this.surname = '';
          this.mobile = '';
          this.n_document = 0;
        } else {
          this.name = resp.name;
          this.surname = resp.surname;
          this.mobile = resp.mobile;
          this.n_document = resp.n_document;
        }
      });
  }

  resetPatient() {
    this.name = '';
    this.surname = '';
    this.mobile = '';
    this.n_document = 0;
  }
}
