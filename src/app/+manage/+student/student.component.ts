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
      this.apiService.totalPointsNeeded = null;
      for(let hasSubject of this.apiService.user.group.subjects ) {
          if(hasSubject.block == 1) {
            this.apiService.block1Subjects.push(hasSubject);
          }
          else if(hasSubject.block == 2) {
            this.apiService.block2Subjects.push(hasSubject);
          }
          else if(hasSubject.block == 3) {
            this.apiService.block3Subjects.push(hasSubject);
          }
          else if(hasSubject.block == 4) {
            this.apiService.block4Subjects.push(hasSubject);
          }
      }
      for(let subjectsData of this.apiService.user.group.subjects) {
        this.apiService.totalPointsNeeded += subjectsData.subject.points;
      }

      this.apiService.getResultsByStudentNumber(this.apiService.user.studentNumber).subscribe(resultData => {
        this.apiService.resultData = resultData;
        console.log(this.apiService.resultData);

        this.apiService.totalPointsEarned = null;

        for (let gradePoints of this.apiService.resultData) {

          if (gradePoints.grade >= 5.5) {
            this.apiService.totalPointsEarned += gradePoints.subjectPart.points;
          }
        }
      });

      this.apiService.getResultsByBlock(this.apiService.user.studentNumber, 1).subscribe(data1 => {
        this.apiService.gradeBlock1 = data1;
      });

      this.apiService.getResultsByBlock(this.apiService.user.studentNumber, 2).subscribe(data2 => {
        this.apiService.gradeBlock2 = data2;
      });

      this.apiService.getResultsByBlock(this.apiService.user.studentNumber, 3).subscribe(data3 => {
        this.apiService.gradeBlock3 = data3;
      });

      this.apiService.getResultsByBlock(this.apiService.user.studentNumber, 4).subscribe(data4 => {
        this.apiService.gradeBlock4 = data4;
      });
    });
  }
}
