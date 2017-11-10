import { ConfigMainClass } from './config.mainClass';

export class ConfigWebClass {
  public config: ConfigMainClass;
  constructor() {
    this.config = new ConfigMainClass();
    this.init();
  }

 private init(): void {
    console.log('initilising weconfig data');
    this.config.setAppName('Webconfig name');
  }

  public getObj(): ConfigMainClass {
    console.log('return object');
    return this.config;
  }

}
