import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillRent } from './model/bill-rent.model';
import { Bill } from '../../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillRentService {
  private url: string = "http://localhost:8082/rent";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(this.url + '/all');
  }
}
