import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the lazy loaded GradesComponent.
 */
@Component({
  selector: 'sd-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {
  public loading: boolean = false;
  public errorMessage: string;
  public gradeBlok1Active: boolean = true;
  public gradeBlok2Active: boolean = false;
  public gradeBlok3Active: boolean = false;

  constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
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
