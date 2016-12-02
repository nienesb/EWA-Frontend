import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AdalService } from '../adal/adal.service';
import { AuthHttp } from '../auth/auth.http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class ApiService {

  public baseData: any;
  public baseDataObservable: any;
  public transport: any;
  public transportObservable: any;
  public medicine: any;
  public medicineObservable: any;

  constructor(private adalService: AdalService, private authHttp: AuthHttp) { }

  // voorbeeld om een endpoint op te zetten.
  /*public getBaseData() {
    if (this.baseData) {
      return Observable.of(this.baseData);
    } else if (this.baseDataObservable) {
      return this.baseDataObservable;
    } else {
      this.baseDataObservable = this.authHttp.get('/api/BaseData/223')
          .map(res => res.json())
          .do(val => {
            this.baseData = val;
            this.baseDataObservable = null;
          })
          .share();
      return this.baseDataObservable;
    }
  }*/

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error['_body']) ? error['_body'] :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

      if (error.status === 401) {
        this.adalService.login();
      }
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
