import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ward } from '../models/ward';

@Injectable({
  providedIn: 'root'
})
export class WardService {
  private baseUrl = `api/ward`
  private readonly apiHost = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) {
  }

  getWards(): Observable<Ward[]> {
    return this.httpClient.get<Ward[]>(`${this.apiHost}/${this.baseUrl}`);
  }
}
