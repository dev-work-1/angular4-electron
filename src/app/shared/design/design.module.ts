import { NgModule } from '@angular/core';

import {MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';

const UI_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [
    UI_MODULES
  ],
  declarations: [],
  exports: [UI_MODULES]
})
export class DesignModule { }
