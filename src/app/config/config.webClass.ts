import { ConfigMainClass } from './config.mainClass';

export class ConfigWebClass {
  public config: ConfigMainClass;
  constructor() {
    this.config = new ConfigMainClass();
    this.init();
  }

  // Anything to initialised custom: will be called automatically
 private init(): void {
    console.log('initilising weconfig data');
    this.config.setAppName("Webconfig name");
  }

  public getObj(): ConfigMainClass {
    console.log('initilising weconfig data');
    return this.config;
  }

}
