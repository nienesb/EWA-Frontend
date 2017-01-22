import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { SubjectManagementComponent, SubjectPartManagementComponent } from '../../../shared/index';
import { SubjectClient, SubjectPartClient } from '../../../shared/models/index';

/**
 * This class represents the lazy loaded SubjectsComponent.
 */
@Component({
  selector: 'sd-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  public loading: boolean = false;
  public errorMessage: string;
  public group1Active: boolean = true;
  public group2Active: boolean = false;
  public group3Active: boolean = false;

  constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  public activateGroupBlok(blok: string) {
    switch (blok) {
      case 'group1Active':
        this.group1Active = true;
        this.group2Active = false;
        this.group3Active = false;
      break;
      case 'group2Active':
        this.group1Active = false;
        this.group2Active = true;
        this.group3Active = false;
      break;
      case 'group3Active':
        this.group1Active = false;
        this.group2Active = false;
        this.group3Active = true;
      break;
    }
  }

  public insertTeam() {
    return this.modal.open(SubjectManagementComponent,  overlayConfigFactory({subject: new SubjectClient()}, BSModalContext));
  }

  public openSubjectPart(subjectId: any, subjectPart: any) {
    if (subjectPart) {
      return this.modal.open(SubjectPartManagementComponent,  overlayConfigFactory({subjectID: subjectId, subjectPart: subjectPart}, BSModalContext));
    }
  }

  public getSubjects(event: any) {
    this.apiService.getSubjects(event);
  }
}

