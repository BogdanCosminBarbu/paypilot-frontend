import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillRent } from './model/bill-rent.model';

@Injectable({
  providedIn: 'root'
})
export class BillRentService {
  private url: string = "http://localhost:8082/bill/rent";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<BillRent[]> {
    return this.httpClient.get<BillRent[]>(this.url);
  }
}
