import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotificationComponent } from './notification/notification.component';
import { ScheduledPaymentsComponent } from './scheduled-payments/scheduled-payments.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { NotificationService } from './notification/notification.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BillOverviewComponent } from './manage-bill/bill-overview/bill-overview.component';
import { RouterModule } from '@angular/router';
import { AddBillComponent } from './manage-bill/add-bill/add-bill.component';
import { BillOverdueUpcomingComponent } from './manage-bill/bill-overdue-upcoming/bill-overdue-upcoming.component';
import { BillOverdueComponent } from './manage-bill/bill-overdue-upcoming/bill-overdue/bill-overdue.component';
import { BillUpcomingComponent } from './manage-bill/bill-overdue-upcoming/bill-upcoming/bill-upcoming.component';
import { AddBillService } from './manage-bill/service/add-bill.service';
import { ShareServiceService } from './manage-bill/service/share-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ScheduledPaymentsComponent,
    NotificationComponent,
    TrackPaymentsComponent,
    ManageBillComponent,
    BillOverviewComponent,
    BillOverdueUpcomingComponent,
    BillOverdueComponent,
    BillUpcomingComponent,
    AddBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterTestingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'manage-bills',
        component: ManageBillComponent
      },
      {
        path: 'manage-bills/add-bill',
        component: AddBillComponent
      }
    ])
  ],
  providers: [
    NotificationService,
    HttpClient,
    AddBillService,
    ShareServiceService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
