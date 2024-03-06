import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Bill } from './dto/bill';
import { TrackPaymentsProgressService } from './track-payments-progress.service';


@Component({
  selector: 'app-track-payments-progress',
  templateUrl: './track-payments-progress.component.html',
  styleUrl: './track-payments-progress.component.css'
})
export class TrackPaymentsProgressComponent implements OnInit{

  paymentForm: FormGroup;
  bills: Bill[] = [];
  
  constructor(private trackPaymentProgressSerive:TrackPaymentsProgressService, private fb: FormBuilder, private location: Location){
    this.paymentForm = this.fb.group({
      billCategory: new FormControl("ALL", [Validators.required]),
      billName: new FormControl("", [Validators.required])
    });
  }

  onSubmit( ) {
    console.log(this.paymentForm.value);
  }

  fetchBills() {
    const category = this.paymentForm.value.billCategory;
    const billName = this.paymentForm.value.billName;
  
    this.trackPaymentProgressSerive.getBills(category, billName)
      .subscribe(
        data => {
          data.forEach((rawBill: { due_amount: any; amount: any; billName: any; dueDate: any; overdueBy: any}) => {
            const [year, month, day] = rawBill.dueDate;
            const date = new Date(year, month - 1, day);
            const formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
            const overdue = this.calculateOverdueDays(formattedDate.toString().substring(0, 10));
            let bill: Bill = {
              due_amount: rawBill.due_amount,
              amount: rawBill.amount,
              name: rawBill.billName,
              due_date: formattedDate,
              overdueBy: overdue
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
