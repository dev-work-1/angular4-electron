import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from '../system/system.component';
import { BookAppointmentComponent } from '../pages/book-appointment/book-appointment.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const systemRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'book-appointment',
        component: BookAppointmentComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(systemRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SystemRoutingModule { }
