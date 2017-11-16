import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';
import { SystemComponent } from './system/system.component';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule,
    BodyModule,
    WidgetsModule
  ],
  declarations: [SystemComponent],
  exports: [SystemComponent]
})
export class SystemModule { }
