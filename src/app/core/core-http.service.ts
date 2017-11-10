import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CoreHttpHeaders } from './core-http.headers';

@Injectable()
export class CoreHttpService {
  private headObj;
  private reqHead;

  constructor(private http: HttpClient) {
    this.headObj = new CoreHttpHeaders();
    this.headObj.setHeaders('Authorization', 'my-auth-token') ;
    this.reqHead.headers = this.headObj.getHeders();
  }

  private _buildAuthHeader(): string {
    return 'abc';
  }

  public coreGet(url: string): Observable<Object> {
    return this.http.get(url, this.reqHead);
  }

  public corePost(url: string, body): Observable<Object> {
    return this.http.post(url, body, this.reqHead);
  }

}

/*
import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestMethod } from '@angular/http';

@Injectable()
export class CoreHttpService {


   process: EventEmitter<any> = new EventEmitter<any>();
  authFailed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _http: HttpClient) { }

  private _buildAuthHeader(): string {
    return 'abc';
  }

  public get(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Post, url, body, options);
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Put, url, body, options);
  }

  public delete(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Head, url, null, options);
  }

  private _request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    let requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: body
    }, options));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    requestOptions.headers.set('Authorization', this._buildAuthHeader());

    return Rx.Observable.create((observer) => {
      this.process.next(Action.QueryStart);
      this._http.request(new Request(requestOptions))
        .map(res=> res.json())
        .finally(() => {
        this.process.next(Action.QueryStop);
      })
        .subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          switch (err.status) {
            case 401:
              //intercept 401
              this.authFailed.next(err);
              observer.error(err);
              break;
            default:
              observer.error(err);
              break;
          }
        })
    })
  }
}

*/
