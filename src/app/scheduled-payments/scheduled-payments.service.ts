import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledPaymentsService {
  
  private baseUrl = 'http://localhost:8082/scheduled-payment'; 
  private billUrl = 'http://localhost:8082/bill/matching';
  private userUrl = 'http://localhost:8082/user';

  constructor(private http: HttpClient) { }

  getScheduledPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBills(category: string, dateFrom: string, dateTo: string): Observable<any> {
    let params = new HttpParams()
      .set('billCategory', category)
      .set('dateFrom', dateFrom)
      .set('dateTo', dateTo);
  
    return this.http.get(this.billUrl, { params });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.userUrl}/${1}`);
  }

  createScheduledPayment(schPaymentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, schPaymentData);
  }
}
