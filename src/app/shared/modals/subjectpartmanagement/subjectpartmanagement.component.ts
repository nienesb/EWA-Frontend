import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { ApiService } from '../../../shared/api/api.service';
import { SubjectPartClient } from '../../models/index';
import { SubjectPartAddComponent } from '../subjectpartadd/subjectpartadd.component';
import { ActivatedRoute } from '@angular/router';

export class SubjectPartManagementContext extends BSModalContext {
  public subjectPart: any;
  public subjectID: any;
  public errorMessage?: string = null;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */

@Component({
  selector: 'modal-content',
  templateUrl: './subjectpartmanagement.component.html',
  styleUrls: ['./subjectpartmanagement.component.scss']
})
export class SubjectPartManagementComponent implements ModalComponent<SubjectPartManagementContext> {
  context: SubjectPartManagementContext;

  constructor(public route: ActivatedRoute, public dialog: DialogRef<SubjectPartManagementContext>, public apiService: ApiService, public modal: Modal) {
    this.context = dialog.context;
    console.log(this.context.subjectPart);
}

  public close() {
    // just close the modal without saving.
    this.dialog.close();
  }

  public save() {

  }

  public insertSubjectPart() {
    return this.modal.open(SubjectPartAddComponent,  overlayConfigFactory({subjectID: this.context.subjectID, subjectPart: new SubjectPartClient()}, BSModalContext));
  }

  /*private getUsers() {
    this.userManagementService.getAllTeams().subscribe(data => {
      this.userManagementService.teams = data.result;
    });
  }*/
}
