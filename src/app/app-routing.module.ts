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
import { BillOverdueUpcomingComponent } from './manage-bill/bill-overdue-upcoming/bill-overdue-upcoming.component';
import { BillOverdueComponent } from './manage-bill/bill-overdue-upcoming/bill-overdue/bill-overdue.component';
import { BillUpcomingComponent } from './manage-bill/bill-overdue-upcoming/bill-upcoming/bill-upcoming.component';
import { TrackPaymentsProgressComponent } from './track-payments/track-payments-progress/track-payments-progress.component';
import { TrackPaymentsOverviewComponent } from './track-payments/track-payments-overview/track-payments-overview.component';
import { TrackPaymentsHistoryComponent } from './track-payments/track-payments-history/track-payments-history.component';

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
    path:'bill-overdue-upcoming',
    component : BillOverdueUpcomingComponent
  },
  {
    path:'bill-overdue',
    component : BillOverdueComponent
  },
  {
    path:'bill-upcoming',
    component : BillUpcomingComponent
  },
  {
    path : 'track-payments/payments-progress',
    component : TrackPaymentsProgressComponent
  },
  {
    path : 'track-payments/payments-overview',
    component : TrackPaymentsOverviewComponent
  },
  {
    path : 'track-payments/payments-history',
    component : TrackPaymentsHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
