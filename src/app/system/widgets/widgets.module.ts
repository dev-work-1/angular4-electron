import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class WidgetsModule { }