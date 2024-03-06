import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledPaymentsService {
  private baseUrl = 'http://yourbackendapi.com/scheduled-payments'; // Change to your backend URL

  constructor(private http: HttpClient) { }

  getScheduledPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}