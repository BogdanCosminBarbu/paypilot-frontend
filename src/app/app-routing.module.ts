import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { NotificationComponent } from './notification/notification.component';
import { ScheduledPaymentsComponent } from './scheduled-payments/scheduled-payments.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'manage-bills',component : ManageBillComponent},
  {path : 'notification',component : NotificationComponent},
  {path : 'schedule-payments',component : ScheduledPaymentsComponent},
  {path : 'track-payments',component : TrackPaymentsComponent},
  {path : 'home', component : HomeComponent},
  {path : '' , redirectTo : 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
