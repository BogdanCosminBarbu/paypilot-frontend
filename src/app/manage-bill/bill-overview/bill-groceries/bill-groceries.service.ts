import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillGroceries } from './model/bill-groceries.model';
import { Bill } from '../../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillGroceriesService {
  private url: string = "http://localhost:8082/bill/groceriesBills";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(this.url);
  }
}