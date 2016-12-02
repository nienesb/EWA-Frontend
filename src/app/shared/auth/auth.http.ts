import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AdalService } from '../adal/adal.service';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../config/app.config';

@Injectable()
export class AuthHttp {

  constructor(private adalService: AdalService, private appConfig: AppConfig, private http: Http) {}

  get(url: string): Observable<any> {
    return Observable.fromPromise(this.adalService.acquireToken(this.adalService.config.loginResource)).flatMap(token => {
      let options = this.setOptions(token.toString());
      return this.http.get(this.appConfig.get('API') + url, options);
    });
  }

  post(url: string, data: any): Observable<any> {
    return Observable.fromPromise(this.adalService.acquireToken(this.adalService.config.loginResource)).flatMap(token => {
      let options = this.setOptions(token.toString());
      return this.http.post(this.appConfig.get('API') + url, data, options);
    });
  }

  put(url: string, data: any): Observable<any> {
    return Observable.fromPromise(this.adalService.acquireToken(this.adalService.config.loginResource)).flatMap(token => {
      let options = this.setOptions(token.toString());
      return this.http.put(this.appConfig.get('API') + url, data, options);
    });
  }

  private setOptions(token: string): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}
