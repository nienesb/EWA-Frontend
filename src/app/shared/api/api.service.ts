import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AdalService } from '../adal/adal.service';
import { AuthHttp } from '../auth/auth.http';
import { User, SubjectClient, SubjectPartClient, Result, GroupHasSubjectClient } from '../models/index';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class ApiService {
  public resultDataYear1: any;
  public resultDataYear2: any;
  public resultDataYear3: any;
  public resultDataYear4: any;
  public totalPointsNeeded: number = 60;
  public totalPointsEarnedYear1: any = 0;
  public totalPointsEarnedYear2: any = 0;
  public totalPointsEarnedYear3: any = 0;
  public totalPointsEarnedYear4: any = 0;
  public user: User = new User();
  public group: any;
  public groups: any;
  public subjects: any = null;
  public gradeYear1Block1: any;
  public gradeYear1Block2: any;
  public gradeYear1Block3: any;
  public gradeYear1Block4: any;
  public gradeYear2Block1: any;
  public gradeYear2Block2: any;
  public gradeYear2Block3: any;
  public gradeYear2Block4: any;
  public gradeYear3Block1: any;
  public gradeYear3Block2: any;
  public gradeYear3Block3: any;
  public gradeYear3Block4: any;
  public gradeYear4Block1: any;
  public gradeYear4Block2: any;
  public gradeYear4Block3: any;
  public gradeYear4Block4: any;
  public block1Subjects = [];
  public block2Subjects = [];
  public block3Subjects = [];
  public block4Subjects = [];
  private tenant: string = 'ee6564fc-c4f2-47f6-a07f-995228564fb6';

  constructor(private adalService: AdalService, private authHttp: AuthHttp) { }

  public getYearResultsByStudentNumber(studentNumber: number, year: number): Observable<any> {
    return this.authHttp.get(`/results/${studentNumber}/${year}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

   public getAllStudents(): Observable<any> {
    return this.authHttp.get(`/users`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getAllSubjects(): Observable<any> {
    return this.authHttp.get(`/subjects`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getAllSubjectparts(): Observable<any> {
    return this.authHttp.get(`/subjectparts`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getResultsByYearBlock(studentNumber: number, year: number, block: number): Observable<any> {
    return this.authHttp.get(`/results/${studentNumber}/${year}/${block}`)
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

  public getAllTeachers(): Observable<any> {
    return this.authHttp.get(`/users/teacher`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getGroups(): Observable<any> {
    return this.authHttp.get(`/groups`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public insertSubject(subject: SubjectClient): Observable<any> {
      let body = JSON.stringify(subject);
      return this.authHttp.post('/admin/subject', body)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public insertGrade(result: Result): Observable<any> {
    let body = JSON.stringify(result);
    return this.authHttp.post('/teacher/grade', body)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  public insertSubjectPart(subjectPart: SubjectPartClient): Observable<any> {
    let body = JSON.stringify(subjectPart);
    return this.authHttp.post('/admin/subjectpart', body)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  public insertGroupHasSubject(groupHasSubject: GroupHasSubjectClient): Observable<any> {
    let body = JSON.stringify(groupHasSubject);
    return this.authHttp.post('/admin/assignsubject', body)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

   public getSubjects(event: any) {
    if (event) {
      this.group = event;
      this.subjects = [];
      this.subjects = this.findById(this.groups, this.group);
      console.log(this.subjects);
    } else {
      this.subjects = [];
    }
  }

  private findById(source, id) {
    return source.filter(function( obj ) {
        return +obj.id === +id;
    })[ 0 ].subjects;
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
