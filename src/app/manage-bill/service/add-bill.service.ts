import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddBillService {

  private url: string = "http://localhost:8082/groceriesBills/addBill"

  private urlUpdate: string = "http://localhost:8082/groceriesBills/updateBill"

  constructor(private httpClient: HttpClient) {
    
   }

   public addBill(bill: Bill): Observable<Object> {
    return this.httpClient.post(`${this.url}`, bill);
  } 

  public updateBill(bill: Bill,id:number|undefined): Observable<Object> {
    return this.httpClient.post(`${this.urlUpdate}/`+`${id}`, bill);
  } 
}
