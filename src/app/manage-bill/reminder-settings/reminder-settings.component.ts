import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill.model';
import { BillCellphoneService } from '../bill-overview/bill-cellphone/bill-cellphone.service';
import { BillRentService } from '../bill-overview/bill-rent/bill-rent.service';
import { BillDebtService } from '../bill-overview/bill-debt/bill-debt.service';
import { BillGroceriesService } from '../bill-overview/bill-groceries/bill-groceries.service';
import { BillInternetService } from '../bill-overview/bill-internet/bill-internet.service';
import { BillRetirementService } from '../bill-overview/bill-retirement/bill-retirement.service';
import { ReminderSettings } from '../../notification/model/reminderSettings.model';
import { AddBillService } from '../service/add-bill.service';

@Component({
  selector: 'app-reminder-settings',
  templateUrl: './reminder-settings.component.html',
  styleUrl: './reminder-settings.component.css'
})
export class ReminderSettingsComponent implements OnInit{
  bill !:Bill;
  bills !:Bill[];
  billCategory!: string;
  reminderSettings !: ReminderSettings;
  constructor(
    private billCellphoneService: BillCellphoneService,
    private billRentService:BillRentService,
    private billDebtService: BillDebtService,
    private billGroceriesService: BillGroceriesService,
    private billInternetService: BillInternetService,
    private billRetirementService : BillRetirementService,
    private addBillService:AddBillService,
    ){
      this.bill = new Bill();
      this.reminderSettings = new ReminderSettings();
    }

  ngOnInit(){

  }
  
  loadBills() {
    if(this.billCategory ==='HOUSE_RENT'){
      this.billRentService.getAll().subscribe(
        data => this.bills = data 
      );
    } else if(this.billCategory ==='CELL_PHONE_CHARGES'){
      this.billCellphoneService.getAll().subscribe(
        data => this.bills = data 
      )
    } else if (this.billCategory ==='GROCERIES') {
      this.billGroceriesService.getAll().subscribe(
        data => this.bills = data 
      )
    } else if (this.billCategory ==='DEBT_PAYMENTS') {
      this.billDebtService.getAll().subscribe(
        data => this.bills = data 
      )
    } else if (this.billCategory ==='INTERNET_CHARGES') {
      this.billInternetService.getAll().subscribe(
        data => this.bills = data 
      )
    } else if (this.billCategory ==='RETIREMENT_CHARGES') {
      this.billRetirementService.getAll().subscribe(
        data => this.bills = data 
      )
    }
  }

  saveSettings(){
    this.reminderSettings.active = true;
    this.bill.reminderSettings = new ReminderSettings();
    this.bill.reminderSettings.active = this.reminderSettings.active;
    this.bill.reminderSettings.message = this.reminderSettings.message;
    this.bill.reminderSettings.reminderFrequency = this.reminderSettings.reminderFrequency;
    this.bill.reminderSettings.reminderStartDate = this.reminderSettings.reminderStartDate;
    this.addBillService.updateBill(this.bills[0],this.bills[0].billId).subscribe(data =>{
      console.log("Bill updated");
    })
  }
}
