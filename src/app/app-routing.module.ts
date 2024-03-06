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
    path:'reminder-settings',
    component : ReminderSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
