import { Component, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrackPaymentsProgressService {
    private baseUrl = 'http://localhost:8082/track-payments/matching';
    private billUrl = 'http://localhost:8082/bill/matching';

    getBills(category: string, billName: string): Observable<any> {
        let params = new HttpParams()
        .set('billCategory', category)
        .set('billName', billName);
        return this.http.get(this.billUrl, { params });
    }

    constructor(private location: Location, private http: HttpClient) { }

    goBack(): void {
        this.location.back(); 
    }
}