import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { ApiService } from '../../../shared/api/api.service';
import { SubjectClient } from '../../models/index';
import { Router, ActivatedRoute } from '@angular/router';

export class SubjectManagementContext extends BSModalContext {
  public subject: SubjectClient;
  public group?: any;
  public errorMessage?: string = null;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */

@Component({
  selector: 'modal-content',
  templateUrl: './subjectmanagement.component.html',
  styleUrls: ['./subjectmanagement.component.scss']
})
export class SubjectManagementComponent implements ModalComponent<SubjectManagementContext> {
  context: SubjectManagementContext;

  constructor(public router: Router, public route: ActivatedRoute, public dialog: DialogRef<SubjectManagementContext>, public apiService: ApiService, public modal: Modal) {
    this.context = dialog.context;
    console.log(this.context.subject);
}

  public close() {
    // just close the modal without saving.
    this.dialog.close();
  }

  public save() {
    this.apiService.insertSubject(this.context.subject).subscribe(data => {
      this.dialog.close();
      this.router.navigate(['/subjects']);
    }, error => console.log(error));
  }

  /*private getUsers() {
    this.userManagementService.getAllTeams().subscribe(data => {
      this.userManagementService.teams = data.result;
    });
  }*/
}
