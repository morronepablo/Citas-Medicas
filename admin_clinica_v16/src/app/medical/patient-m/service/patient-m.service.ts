import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PatientMService {
  constructor(public http: HttpClient, public authService: AuthService) {}

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  listPatients(page: number = 1, search: string = '') {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/patients?page=' + page + '&search=' + search;
    return this.http.get(URL, { headers: headers });
  }

  registerPatient(data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/patients';
    return this.http.post(URL, data, { headers: headers });
  }

  showPatient(staff_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/patients/' + staff_id;
    return this.http.get(URL, { headers: headers });
  }

  updatePatient(staff_id: string, data: any) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/patients/' + staff_id;
    return this.http.post(URL, data, { headers: headers });
  }

  deletePatient(staff_id: string) {
    const headers = new HttpHeaders({
      Autorization: 'Bearer ' + this.authService.token,
    });
    const URL = URL_SERVICIOS + '/patients/' + staff_id;
    return this.http.delete(URL, { headers: headers });
  }
}
