import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillDebt } from './model/bill-debt.model';

@Injectable({
  providedIn: 'root'
})
export class BillDebtService {
  private url: string = "http://localhost:8082/debt";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<BillDebt[]> {
    return this.httpClient.get<BillDebt[]>(this.url + '/all');
  }
}