import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignModule } from './design/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule
  ],
  declarations: [],
  exports: [CommonModule, DesignModule]
})
export class SharedModule { }
