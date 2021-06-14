import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = `api/doctor`
  private readonly apiHost = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) {
  }

  getDoctorsByWard(wardId:number): Observable<Doctor[]>  {
    return this.httpClient.get<Doctor[]>(`${this.apiHost}/${this.baseUrl}/ward/` + wardId);
  }

}
