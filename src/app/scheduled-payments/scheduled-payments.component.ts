import { Component, OnInit } from '@angular/core';
import { ScheduledPaymentsService } from './scheduled-payments.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Bill } from './dtos/bill';
import { User } from './dtos/user';

@Component({
  selector: 'app-scheduled-payments',
  templateUrl: './scheduled-payments.component.html',
  styleUrls: ['./scheduled-payments.component.css']
})
export class ScheduledPaymentsComponent implements OnInit {
  scheduledPayments: any;
  paymentForm: FormGroup;
  schedulePaymentForm : FormGroup;
  bills: Bill[] = [];
  selectedBillId : number = -1;
  selectedBill : Bill | undefined;
  isSchedulingInitiated = false;
  selectedUser : User | undefined;

  constructor(private scheduledPaymentsService: ScheduledPaymentsService, 
    private fb: FormBuilder) {
      this.paymentForm = this.fb.group({
        billCategory: new FormControl("ALL", [Validators.required]),
        dateFrom: new FormControl("2023-08-08", [Validators.required]),
        dateTo: new FormControl("2024-08-08", [Validators.required])
      });

      this.schedulePaymentForm = this.fb.group({
        billCategory: ['', Validators.required],
        payeeName: ['', Validators.required], 
        payeeAddress: ['', Validators.required],
        billDate: ['', Validators.required],
        amount: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
        billName: ['', Validators.required],
        
        purpose: ['', Validators.required],
        paymentFrequency: new FormControl("MONTHLY", [Validators.required]),
        nextPaymentDate : ['', Validators.required],
        paymentMethod :  new FormControl("BANK_TRANSFER", [Validators.required]),
        payerAccount: ['', Validators.required],
        amountToPay: ['', Validators.required],
        bankName: ['', Validators.required],
        bankAccountNumber: ['', Validators.required],
        bankLfscCode: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  onSubmit( ) {
    console.log(this.paymentForm.value);
  }

  fetchBills() {
    const category = this.paymentForm.value.billCategory;
    const dateFrom = this.paymentForm.value.dateFrom;
    const dateTo = this.paymentForm.value.dateTo;
  
    this.scheduledPaymentsService.getBills(category, dateFrom, dateTo)
      .subscribe(
        data => {
          data.forEach((rawBill: { billId: any; amount: any; billName: any; dueDate: any; recurrent: any; billCategory: any}) => {
            const [year, month, day] = rawBill.dueDate;
            const date = new Date(year, month - 1, day);
            const formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);

            let bill: Bill = {
              id: rawBill.billId,
              amount: rawBill.amount,
              name: rawBill.billName,
              due_date: formattedDate,
              billing_cycle: rawBill.recurrent ? "RECURRING" : "NON RECURRING", 
              billCategory: rawBill.billCategory
            }
            
            this.bills.push(bill);
          });
        },
        error => {
          console.error('There was an error!', error);
        }
      );
  }

  onBillSelectionChange(selectedBillId : any) {
    this.selectedBillId = selectedBillId;
    this.selectedBill = this.bills.find(bill => bill.id === +selectedBillId);
  }

  //here, when the user presses Sch Paym button, it fetches the current user
  schedulePayment() {
    if(this.selectedBillId) {
      this.isSchedulingInitiated = true;
      console.log(this.selectedBill);
      this.scheduledPaymentsService.getUserById(1).subscribe({
        next: (data) => {
          this.selectedUser = data;
          console.log(this.selectedUser);

          this.schedulePaymentForm.patchValue({
            billCategory: this.selectedBill?.billCategory,
            payeeName: this.selectedUser?.lastName,
            payeeAddress: this.selectedUser?.address,
            billDate: this.selectedBill?.due_date,
            amount: this.selectedBill?.amount,
            billName: this.selectedBill?.name,
            bankName: this.selectedUser?.bankName,
            bankAccountNumber: this.selectedUser?.bankAccountNumber,
            bankLfscCode: this.selectedUser?.bankLfscCode
          });
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });

    }
  }

  confirmPayment() {
    if (this.schedulePaymentForm.valid) {
      const paymentData = {
        ...this.schedulePaymentForm.value,
        nameOfTheBill: this.schedulePaymentForm.value.billName,
        purposeOfPayment: this.schedulePaymentForm.value.purpose,
        userId: this.selectedUser?.id, 
        billId: this.selectedBillId, 
        enabled: true, 
        bankDetailsId: 1 
      };
  
      this.scheduledPaymentsService.createScheduledPayment(paymentData).subscribe({
        next: (response) => {
          console.log('Payment scheduled created successfully', response);
        },
        error: (error) => {
          console.error('Error scheduling payment:', error);
          // Handle error, show error message to user
        }
      });
    } else {
      alert('Form is not valid.');
    }
  }
}
