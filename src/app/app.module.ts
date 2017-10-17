import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// default modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// custom modules
import { CoreModule } from './core/core.module';
import { ConfigModule } from './config/config.module';

// custom components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ConfigModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
