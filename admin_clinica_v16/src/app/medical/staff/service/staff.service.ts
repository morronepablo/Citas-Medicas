/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(public http: HttpClient, public authService: AuthService) {}

  listUsers() {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/staffs';
    return this.http.get(URL, { headers: headers });
  }

  listConfig() {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/staffs/config';
    return this.http.get(URL, { headers: headers });
  }

  registerUser(data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/staffs';
    return this.http.post(URL, data, { headers: headers });
  }

  showUser(staff_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/staffs/' + staff_id;
    return this.http.get(URL, { headers: headers });
  }

  updateUser(staff_id: string, data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/staffs/' + staff_id;
    return this.http.post(URL, data, { headers: headers });
  }

  deleteUsers(staff_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/staffs/' + staff_id;
    return this.http.delete(URL, { headers: headers });
  }
}
