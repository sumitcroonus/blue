import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SupportComponent } from './support/support.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path:'',
    component:BillingComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'patient',
    component:PatientComponent
  },
  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:'support',
    component:SupportComponent
  },
  {
    path:'setting',
    component:SettingComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
