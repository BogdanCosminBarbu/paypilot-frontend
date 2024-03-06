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
import { NotificationService } from './notification/service/notification.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillOverviewComponent } from './manage-bill/bill-overview/bill-overview.component';
import { BillOverviewService } from './bill-overview.service';
import { RouterModule } from '@angular/router';
import { AddBillComponent } from './manage-bill/add-bill/add-bill.component';
import { TrackPaymentsHistoryComponent } from './track-payments/track-payments-history/track-payments-history.component';
import { TrackPaymentsOverviewComponent } from './track-payments/track-payments-overview/track-payments-overview.component';
import { TrackPaymentsProgressComponent } from './track-payments/track-payments-progress/track-payments-progress.component';
import { TrackPaymentsProgressService } from './track-payments/track-payments-progress/track-payments-progress.service';
import { TrackPaymentsHistoryService } from './track-payments/track-payments-history/track-payments-histtory.service';
import { TrackPaymentsOverviewService } from './track-payments/track-payments-overview/track-payments-overview.service';

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
    TrackPaymentsHistoryComponent,
    TrackPaymentsOverviewComponent,
    TrackPaymentsProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
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
    BillOverviewService,
    TrackPaymentsProgressService,
    TrackPaymentsHistoryService,
    TrackPaymentsOverviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
