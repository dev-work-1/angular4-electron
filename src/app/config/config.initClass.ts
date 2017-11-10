import { ConfigMainClass } from './config.mainClass';
import { ConfigWebClass } from './config.webClass';

export class ConfigInitClass {
    public configObj: ConfigMainClass;

        constructor(token: string) {
            this.loadConfig(token);
        }
        private loadConfig(token: string) {
            console.log('Token name: ' + token);
            this.configObj = this[token]();
        }
        public getConfig(): ConfigMainClass {
            return this.configObj;
        }
        private webConfig(): ConfigMainClass {
            // tslint:disable-next-line:prefer-const
            let web = new ConfigWebClass();
            return web.getObj();
        }
}
