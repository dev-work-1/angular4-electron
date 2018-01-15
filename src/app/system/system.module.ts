import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';
import { SystemComponent } from './system/system.component';
import { WidgetsModule } from './widgets/widgets.module';
import { SystemRoutingModule } from '../system/system-routing/system-routing.module';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    SystemRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    BodyModule,
    WidgetsModule
  ],
  declarations: [SystemComponent, BookAppointmentComponent, DashboardComponent],
  exports: [SystemComponent]
})
export class SystemModule { }
