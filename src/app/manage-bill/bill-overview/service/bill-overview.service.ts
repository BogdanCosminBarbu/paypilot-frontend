import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillOverview } from '../../../BillOverview';

@Injectable({
  providedIn: 'root'
})
export class BillOverviewService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8082/bill"

  public getOverviews(bill: BillOverview): Observable<Map<string, number>> {
    return this.httpClient.post<Map<string, number>>(`${this.url}`, bill);
  }
}
