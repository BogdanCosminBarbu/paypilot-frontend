import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillGroceries } from './model/bill-groceries.model';

@Injectable({
  providedIn: 'root'
})
export class BillGroceriesService {
  private url: string = "http://localhost:8082/bill/groceries";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<BillGroceries[]> {
    return this.httpClient.get<BillGroceries[]>(this.url);
  }
}