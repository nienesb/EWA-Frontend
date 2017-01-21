import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/index';
import { AdalService } from '../../shared/adal/adal.service';

/**
 * This class represents the lazy loaded StudentComponent.
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
      this.apiService.totalPointsNeeded = 60;
      this.apiService.block1Subjects = [];
      this.apiService.block2Subjects = [];
      this.apiService.block3Subjects = [];
      this.apiService.block4Subjects = [];

      for (let hasSubject of this.apiService.user.group.subjects ) {
          if (hasSubject.block === 1) {
            this.apiService.block1Subjects.push(hasSubject);
          } else if (hasSubject.block === 2) {
            this.apiService.block2Subjects.push(hasSubject);
          } else if (hasSubject.block === 3) {
            this.apiService.block3Subjects.push(hasSubject);
          } else if (hasSubject.block === 4) {
            this.apiService.block4Subjects.push(hasSubject);
          }
      }

      this.apiService.getYearResultsByStudentNumber(this.apiService.user.studentNumber, 1).subscribe(resultData => {
        this.apiService.resultDataYear1 = resultData;
        console.log(this.apiService.resultDataYear1);

        this.apiService.totalPointsEarnedYear1 = 0;

        for (let gradePoints of this.apiService.resultDataYear1) {

          if (gradePoints.grade >= 5.5) {
            this.apiService.totalPointsEarnedYear1 += gradePoints.subjectPart.points;
          }
        }
      });

      this.apiService.getYearResultsByStudentNumber(this.apiService.user.studentNumber, 2).subscribe(resultData => {
        this.apiService.resultDataYear2 = resultData;
        console.log(this.apiService.resultDataYear2);

        this.apiService.totalPointsEarnedYear2 = 0;

        for (let gradePoints of this.apiService.resultDataYear2) {

          if (gradePoints.grade >= 5.5) {
            this.apiService.totalPointsEarnedYear2 += gradePoints.subjectPart.points;
          }
        }
      });

      this.apiService.getYearResultsByStudentNumber(this.apiService.user.studentNumber, 3).subscribe(resultData => {
        this.apiService.resultDataYear3 = resultData;
        console.log(this.apiService.resultDataYear3);

        this.apiService.totalPointsEarnedYear3 = 0;

        for (let gradePoints of this.apiService.resultDataYear3) {

          if (gradePoints.grade >= 5.5) {
            this.apiService.totalPointsEarnedYear3 += gradePoints.subjectPart.points;
          }
        }
      });

      this.apiService.getYearResultsByStudentNumber(this.apiService.user.studentNumber, 4).subscribe(resultData => {
        this.apiService.resultDataYear4 = resultData;
        console.log(this.apiService.resultDataYear4);

        this.apiService.totalPointsEarnedYear4 = 0;

        for (let gradePoints of this.apiService.resultDataYear4) {

          if (gradePoints.grade >= 5.5) {
            this.apiService.totalPointsEarnedYear4 += gradePoints.subjectPart.points;
          }
        }
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 1, 1).subscribe(data1 => {
        this.apiService.gradeYear1Block1 = data1;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 1, 2).subscribe(data2 => {
        this.apiService.gradeYear1Block2 = data2;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 1, 3).subscribe(data3 => {
        this.apiService.gradeYear1Block3 = data3;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 1, 4).subscribe(data4 => {
        this.apiService.gradeYear1Block4 = data4;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 2, 1).subscribe(data1 => {
        this.apiService.gradeYear2Block1 = data1;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 2, 2).subscribe(data2 => {
        this.apiService.gradeYear2Block2 = data2;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 2, 3).subscribe(data3 => {
        this.apiService.gradeYear2Block3 = data3;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 2, 4).subscribe(data4 => {
        this.apiService.gradeYear2Block4 = data4;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 3, 1).subscribe(data1 => {
        this.apiService.gradeYear3Block1 = data1;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 3, 2).subscribe(data2 => {
        this.apiService.gradeYear3Block2 = data2;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 3, 3).subscribe(data3 => {
        this.apiService.gradeYear3Block3 = data3;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 3, 4).subscribe(data4 => {
        this.apiService.gradeYear3Block4 = data4;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 4, 1).subscribe(data1 => {
        this.apiService.gradeYear4Block1 = data1;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 4, 2).subscribe(data2 => {
        this.apiService.gradeYear4Block2 = data2;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 4, 3).subscribe(data3 => {
        this.apiService.gradeYear4Block3 = data3;
      });

      this.apiService.getResultsByYearBlock(this.apiService.user.studentNumber, 4, 4).subscribe(data4 => {
        this.apiService.gradeYear4Block4 = data4;
      });

    });
  }
}
