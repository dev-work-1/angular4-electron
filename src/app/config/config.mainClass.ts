import { ConfigDataClass } from './config.dataClass';

export class ConfigMainClass extends ConfigDataClass {

  constructor() {
    super();
  }

  public setAppName(name: string): void {
    this.appName = name;
  }
  public getAppName(): string {
   return  this.appName;
  }

}
