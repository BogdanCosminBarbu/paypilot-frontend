import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { NotificationComponent } from './notification/notification.component';
import { ScheduledPaymentsComponent } from './scheduled-payments/scheduled-payments.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'manage-bills',component : ManageBillComponent},
  {path : 'notifications',component : NotificationComponent},
  {path : 'schedule-payments',component : ScheduledPaymentsComponent},
  {path : 'track-payments',component : TrackPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
