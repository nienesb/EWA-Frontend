import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { ApiService } from '../../../shared/api/api.service';
import { SubjectPartClient } from '../../models/index';
import { Router, ActivatedRoute } from '@angular/router';

export class SubjectPartAddContext extends BSModalContext {
  public subjectPart: SubjectPartClient;
  public subjectID: any;
  public errorMessage?: string = null;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */

@Component({
  selector: 'modal-content',
  templateUrl: './subjectpartadd.component.html',
  styleUrls: ['./subjectpartadd.component.scss']
})
export class SubjectPartAddComponent implements ModalComponent<SubjectPartAddContext> {
  context: SubjectPartAddContext;

  constructor(public router: Router, public route: ActivatedRoute, public dialog: DialogRef<SubjectPartAddContext>, public apiService: ApiService, public modal: Modal) {
    this.context = dialog.context;
    this.context.subjectPart.parentSubject = ({'id': this.context.subjectID});
    console.log(this.context.subjectPart);
}

  public close() {
    // just close the modal without saving.
    this.dialog.close();
  }

  public save() {
      this.apiService.insertSubjectPart(this.context.subjectPart).subscribe(data => {
      this.dialog.close();
      this.getSubjects();
    }, error => console.log(error));
  }

  public getSubjects() {
    this.apiService.getSubjects(this.apiService.group);
  }

  /*private getUsers() {
    this.userManagementService.getAllTeams().subscribe(data => {
      this.userManagementService.teams = data.result;
    });
  }*/
}
