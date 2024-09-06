import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(public http: HttpClient, public authService: AuthService) {}

  listDoctors() {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/doctors';
    return this.http.get(URL, { headers: headers });
  }

  listConfig() {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/doctors/config';
    return this.http.get(URL, { headers: headers });
  }

  registerDoctor(data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/doctors';
    return this.http.post(URL, data, { headers: headers });
  }

  showDoctor(doctor_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/doctors/' + doctor_id;
    return this.http.get(URL, { headers: headers });
  }

  updateDoctor(doctor_id: string, data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/doctors/' + doctor_id;
    return this.http.post(URL, data, { headers: headers });
  }

  deleteDoctor(doctor_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/doctors/' + doctor_id;
    return this.http.delete(URL, { headers: headers });
  }
}
