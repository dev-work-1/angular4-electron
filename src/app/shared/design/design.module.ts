import { NgModule } from '@angular/core';

import {MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

const UI_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [
    UI_MODULES
  ],
  declarations: [],
  exports: [UI_MODULES]
})
export class DesignModule { }
