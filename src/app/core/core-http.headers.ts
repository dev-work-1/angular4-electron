import { HttpHeaders } from '@angular/common/http';

export class CoreHttpHeaders {
  public data: {};

  constructor() {
  }
  public setHeaders(key: string, value: any) {
    this.data = new HttpHeaders().set(key, value);
  }

  public getHeaders(key: string, value: any): object {
    return this.data ;
  }

}
