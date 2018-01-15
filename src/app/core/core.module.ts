import { NgModule } from '@angular/core';

import { CoreComponent } from './core/core.component';


import { SystemModule } from '../system/system.module';
import { FrontendModule } from '../frontend/frontend.module';
import { ConfigModule } from '../config/config.module';
import { CoreRoutingModule } from './core-routing/core-routing.module';

@NgModule({
  imports: [
    SystemModule,
    FrontendModule,
    ConfigModule,
    CoreRoutingModule
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
