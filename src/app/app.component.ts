import { Component } from '@angular/core';
import { CoreComponent } from './core/core/core.component';
import { ConfigModule } from './config/config.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public configOb: ConfigModule) {}
   config = this.configOb.getConfig(); 
   title= this.config.getAppName();
}
