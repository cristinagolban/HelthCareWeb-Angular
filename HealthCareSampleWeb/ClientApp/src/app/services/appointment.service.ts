import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private patientId = 1;

  private baseUrl = `api/appointment`
  private readonly apiHost = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) {
  }

  getAppointmentsByPatient(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.apiHost}/${this.baseUrl}/patient/` + this.patientId);
  }
}
