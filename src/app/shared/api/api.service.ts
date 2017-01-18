import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AdalService } from '../adal/adal.service';
import { AuthHttp } from '../auth/auth.http';
import { User } from '../models/index';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class ApiService {
  public resultData: any;
  public totalPointsNeeded: any;
  public totalPointsEarned: any;
  public user: User = new User();
  public gradeBlock1: any;
  public gradeBlock2: any;
  public gradeBlock3: any;
  public gradeBlock4: any;
  public block1Subjects = [];
  public block2Subjects = [];
  public block3Subjects = [];
  public block4Subjects = [];
  private tenant: string = 'ee6564fc-c4f2-47f6-a07f-995228564fb6';

  constructor(private adalService: AdalService, private authHttp: AuthHttp) { }

  public getResultsByStudentNumber(studentNumber: number): Observable<any> {
    return this.authHttp.get(`/results/${studentNumber}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getResultsByBlock(studentNumber: number, block: number): Observable<any> {
    return this.authHttp.get(`/results/${studentNumber}/${block}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }


  public getUserByMail(mailAddress: string): Observable<any> {
    return this.authHttp.get(`/user?email=${mailAddress}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // Heeft azure graph token nodig.
  public getUserRole(userName: string) {
    return this.authHttp.getFromAzure(`https://graph.windows.net/${this.tenant}/users/${userName}/memberOf?api-version=1.6`)
    .map((res: Response) => res.json())
      .catch(this.handleError);
  }

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
