import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigInitClass } from './config.initClass';
import { ConfigMainClass } from './config.mainClass';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ConfigModule {
  constructor() {}
  getConfig(): ConfigMainClass {
    let configInit = new ConfigInitClass('webConfig');
    let config: ConfigMainClass  = configInit.getConfig();
    return config;
  }


}
