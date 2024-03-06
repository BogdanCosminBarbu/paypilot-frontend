import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { NotificationComponent } from './notification/notification.component';
import { ScheduledPaymentsComponent } from './scheduled-payments/scheduled-payments.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';
import { BillOverviewComponent } from './manage-bill/bill-overview/bill-overview.component';
import { AddBillComponent } from './manage-bill/add-bill/add-bill.component';
import { BillDebtComponent } from './manage-bill/bill-overview/bill-debt/bill-debt.component';
import { BillRentComponent } from './manage-bill/bill-overview/bill-rent/bill-rent.component';
import { BillGroceriesComponent } from './manage-bill/bill-overview/bill-groceries/bill-groceries.component';
import { BillInternetComponent } from './manage-bill/bill-overview/bill-internet/bill-internet.component';
import { BillRetirementComponent } from './manage-bill/bill-overview/bill-retirement/bill-retirement.component';
import { BillCellphoneComponent } from './manage-bill/bill-overview/bill-cellphone/bill-cellphone.component';
import { ReminderSettingsComponent } from './manage-bill/reminder-settings/reminder-settings.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'manage-bill',
    component : ManageBillComponent
  },
  {
    path : 'notification',
    component : NotificationComponent
  },
  {
    path : 'schedule-payments',
    component : ScheduledPaymentsComponent
  },
  {
    path : 'track-payments',
    component : TrackPaymentsComponent
  },
  {
    path : 'bill-overview',
    component : BillOverviewComponent
  },
  {
    path:'add-bill',
    component : AddBillComponent
  },
  {

    path:'debt-payments',
    component : BillDebtComponent
  },
  {
    path:'house-rent',
    component : BillRentComponent
  },
  {
    path:'groceries',
    component : BillGroceriesComponent
  },
  {
    path:'internet-charges',
    component : BillInternetComponent
  },
  {
    path:'retirement-charges',
    component : BillRetirementComponent
  },
  {
    path:'cell-phone-charges',
    component : BillCellphoneComponent
  },

    path:'reminder-settings',
    component : ReminderSettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
