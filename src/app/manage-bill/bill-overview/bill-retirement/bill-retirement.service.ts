import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillRetirement } from './model/bill-retirement.model';
import { Bill } from '../../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillRetirementService {
  private url: string = "http://localhost:8082/bill/retirementBills";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(this.url);
  }
}