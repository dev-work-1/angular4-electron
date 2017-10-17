import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [CoreComponent, HeaderComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
