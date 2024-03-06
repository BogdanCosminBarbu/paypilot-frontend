import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillInternet } from './model/bill-internet.model';
import { Bill } from '../../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillInternetService {
  private url: string = "http://localhost:8082/bill/internetBills";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(this.url);
  }
}