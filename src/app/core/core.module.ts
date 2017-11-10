import { NgModule } from '@angular/core';

import { CoreComponent } from './core/core.component';


import { SystemModule } from '../system/system.module';
import { ConfigModule } from '../config/config.module';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
   // SharedModule,
    SystemModule,
    ConfigModule
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
