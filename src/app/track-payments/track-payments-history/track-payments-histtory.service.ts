import { Component, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrackPaymentsHistoryService {
    private baseUrl = 'http://localhost:8082/track-payments/matching';

    getBills(category: string, dateFrom: string, dateTo: string): Observable<any> {
        let params = new HttpParams()
        .set('billCategory', category)
        .set('dateFrom', dateFrom)
        .set('dateTo', dateTo);
        return this.http.get(this.baseUrl, { params });
    }

    constructor(private location: Location, private http: HttpClient) { }

    goBack(): void {
        this.location.back(); 
    }
}