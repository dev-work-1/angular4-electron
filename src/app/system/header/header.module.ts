import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebSidebarComponent } from './web-sidebar/web-sidebar.component';
import { HeaderService } from './header.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeaderComponent, WebHeaderComponent, WebSidebarComponent],
  exports: [HeaderComponent, WebSidebarComponent],
  providers: [HeaderService]
})
export class HeaderModule { }
