import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Result } from '../../../shared/index';

/**
 * This class represents the lazy loaded GradesComponent.
 */
@Component({
  selector: 'sd-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  public loading: boolean = false;
  public errorMessage: string;
  public gradeBlok1Active: boolean = true;
  public gradeBlok2Active: boolean = false;
  public gradeBlok3Active: boolean = false;
  public result: Result = new Result();
  public users: any;
  public subjectparts: any;
  public resultAdded: string;

  constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.getAllUsers();
    this.getAllSubjectparts();
  }

  public getAllUsers() {
    this.apiService.getAllStudents().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }, error => console.log(error));
  }

  public getAllSubjectparts() {
    this.apiService.getAllSubjectparts().subscribe(data => {
      this.subjectparts = data;
      console.log(this.subjectparts);
    }, error => console.log(error));
  }

  public insertGrade() {
    this.resultAdded = null;
    this.apiService.insertGrade(this.result).subscribe(data => {
      this.resultAdded = 'Cijfer toegevoegd!';
      this.result = new Result();
    }, error => {
      console.log(error);
      this.resultAdded = null;
    });
  }

  public activateGradeBlok(blok: string) {
    switch (blok) {
      case 'gradeBlok1Active':
        this.gradeBlok1Active = true;
        this.gradeBlok2Active = false;
        this.gradeBlok3Active = false;
        break;
      case 'gradeBlok2Active':
        this.gradeBlok1Active = false;
        this.gradeBlok2Active = true;
        this.gradeBlok3Active = false;
        break;
      case 'gradeBlok3Active':
        this.gradeBlok1Active = false;
        this.gradeBlok2Active = false;
        this.gradeBlok3Active = true;
        break;
    }
  }
}

