import { Component, OnInit } from '@angular/core';
import { TrackPaymentsComponent } from '../track-payments.component';
import { Router } from 'express';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from './dto/bill';
import { TrackPaymentsHistoryService } from './track-payments-histtory.service';

@Component({
  selector: 'app-track-payments-history',
  templateUrl: './track-payments-history.component.html',
  styleUrl: './track-payments-history.component.css'
})
export class TrackPaymentsHistoryComponent implements OnInit{
  paymentForm: FormGroup;
  bills: Bill[] = [];
  
  constructor(private trackPaymentProgressSerive:TrackPaymentsHistoryService, private fb: FormBuilder, private location: Location){
    this.paymentForm = this.fb.group({
      billCategory: new FormControl("ALL", [Validators.required]),
      dateFrom: new FormControl("2023-08-08", [Validators.required]),
      dateTo: new FormControl("2024-08-08", [Validators.required])
    });
  }

  onSubmit( ) {
    console.log(this.paymentForm.value);
  }

  fetchBills() {
    const category = this.paymentForm.value.billCategory;
    const dateFrom = this.paymentForm.value.dateFrom;
    const dateTo = this.paymentForm.value.dateTo;
  
    this.trackPaymentProgressSerive.getBills(category, dateFrom, dateTo)
      .subscribe(
        data => {
          data.forEach((rawBill: { amount: any; billName: any; dueDate: any}) => {
            const [year, month, day] = rawBill.dueDate;
            const date = new Date(year, month - 1, day);
            const formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
            let bill: Bill = {
              amount: rawBill.amount,
              name: rawBill.billName,
              due_date: formattedDate,
            }
            
            this.bills.push(bill);
          });
        },
        error => {
          console.error('There was an error!', error);
        }
      );
  }

  ngOnInit(): void {
  }

  calculateOverdueDays(dueDate: string): number {
    const today = new Date();
    const due = new Date(dueDate);
    const differenceInTime = today.getTime() - due.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays > 0 ? differenceInDays : 0;
  }

    goBack(): void {
      this.location.back(); 
  }
}
