import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BillCellphone } from "./model/bill-cellphone.model";

@Injectable({
  providedIn: 'root'
})
export class BillCellphoneService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8082/bill/phone"

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}