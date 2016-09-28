import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../index';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

/*
*
* TODO: Change this to be able to use the EWA API.
*
*/

@Injectable()
export class ApiService {

  public baseData: any;
  public baseDataObservable: any;

  constructor(private http: Http) { }

  public getBaseData() {
    if (this.baseData) {
      return Observable.of(this.baseData);
    } else if (this.baseDataObservable) {
      return this.baseDataObservable;
    } else {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers, body: ''});
      this.baseDataObservable = this.http.get(Config.API + '/api/BaseData/223', options)
          .map(res => res.json())
          .do(val => {
            this.baseData = val;
            this.baseDataObservable = null;
          })
          .share();
      return this.baseDataObservable;
    }
  }

  public getAmbulanceService(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, body: ''});
    return this.http.get(Config.API + '/api/AmbulanceService/223', options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public updateAmbulanceService(
    ambulanceServiceId: number,
    forceChangePasswordDays: number,
    warningForceChangePasswordDays: number,
    lastUsedPasswordsCount: number,
    invalidLoginAttemptsNumber: number,
    blockedAccountMinutes: number,
    userInactivityDays: number,
    forceChangePasswordFirstLogin: boolean,
    lastGeneratedInvoiceNumber: number,
    smartStreamRunNumber: number,
    useAttachments: boolean,
    useFirstArrivalTimeAtTheAccident: boolean): Observable<any> {
    let body = JSON.stringify({
      AmbulanceServiceid: 223,
      ForceChangePasswordDays: forceChangePasswordDays,
      WarningForceChangePasswordDays: warningForceChangePasswordDays,
      LastUsedPasswordsCount: lastUsedPasswordsCount,
      InvalidLoginAttemptsNumber: invalidLoginAttemptsNumber,
      BlockedAccountMinutes: blockedAccountMinutes,
      UserInactivityDays: userInactivityDays,
      ForceChangePasswordFirstLogin: forceChangePasswordFirstLogin,
      LastGeneratedInvoiceNumber: lastGeneratedInvoiceNumber,
      SmartStreamRunNumber: smartStreamRunNumber,
      UseAttachments: useAttachments,
      UseFirstArrivalTimeAtTheAccident: useFirstArrivalTimeAtTheAccident
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.put(Config.API + '/api/AmbulanceService/'
      + ambulanceServiceId, body, options)
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  public getCountries(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers , body: ''});
    return this.http.get(Config.API + '/api/Country/ListCountries?ambulanceServiceId=223', options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error['_body']) ? error['_body'] :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
