/* eslint-disable @typescript-eslint/no-inferrable-types */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(public http: HttpClient, public authService: AuthService) {}

  listAppointments(
    page: number = 1,
    search: string = '',
    specialitie_id: string = '',
    date: any = null
  ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    let LINK = '';
    if (search) {
      LINK += '&search=' + search;
    }
    if (specialitie_id) {
      LINK += '&specialitie_id=' + specialitie_id;
    }
    if (date) {
      LINK += '&date=' + date;
    }
    const URL = URL_SERVICIOS + '/appointment?page=' + page + LINK;
    return this.http.get(URL, { headers: headers });
  }

  listConfig() {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment/config';
    return this.http.get(URL, { headers: headers });
  }

  listPatient(n_document: string = '') {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment/patient?n_document=' + n_document;
    return this.http.get(URL, { headers: headers });
  }

  registerAppointment(data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment';
    return this.http.post(URL, data, { headers: headers });
  }

  listFilter(data: any) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment/filter';
    return this.http.post(URL, data, { headers: headers });
  }

  showAppointment(appointment_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment/' + appointment_id;
    return this.http.get(URL, { headers: headers });
  }

  updateAppointment(appointment_id: string, data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment/' + appointment_id;
    return this.http.put(URL, data, { headers: headers });
  }

  deleteAppointment(appointment_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/appointment/' + appointment_id;
    return this.http.delete(URL, { headers: headers });
  }
}
