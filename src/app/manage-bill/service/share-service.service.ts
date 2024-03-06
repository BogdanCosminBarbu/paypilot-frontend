import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  private successMessageSubject = new Subject<string>();
  successMessage$ = this.successMessageSubject.asObservable();

  constructor() { }

  setSuccessMessage(message: string) {
    this.successMessageSubject.next(message);
  }
}
