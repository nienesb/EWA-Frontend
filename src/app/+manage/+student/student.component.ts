import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/index';
import { AdalService } from '../../shared/adal/adal.service';

/**
 * This class represents the lazy loaded DetailsComponent.
 */
@Component({
  selector: 'sd-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(private adalService: AdalService, public apiService: ApiService, public route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef, public router: Router) {
    this.apiService.getUserByMail(this.adalService.userInfo.userName).subscribe(data => {
      this.apiService.user = data;
      console.log(this.apiService.user);

      this.apiService.getResultsByStudentNumber(this.apiService.user.studentNumber).subscribe(resultData => {
        this.apiService.resultData = resultData;
        console.log(this.apiService.resultData);

        this.apiService.totalPointsNeeded = null;
        this.apiService.totalPointsEarned = null;

        for (let gradePoints of this.apiService.resultData) {
          this.apiService.totalPointsNeeded += gradePoints.subjectPart.points;

          if (gradePoints.grade >= 5.5) {
            this.apiService.totalPointsEarned += gradePoints.subjectPart.points;
          }
        }
      });
    });
  }
}
