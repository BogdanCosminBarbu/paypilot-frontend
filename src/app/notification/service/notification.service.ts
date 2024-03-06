import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
  private baseUrl = 'http://localhost:8082/notification';

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}