import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { ApiService } from '../../../shared/api/api.service';
import { Grade } from '../../models/index';
import { ActivatedRoute } from '@angular/router';

export class GradeManagementContext extends BSModalContext {
  public grade: Grade;
  public errorMessage?: string = null;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */

@Component({
  selector: 'modal-content',
  templateUrl: './grademanagement.component.html',
  styleUrls: ['./grademanagement.component.scss']
})
export class GradeManagementComponent implements ModalComponent<GradeManagementContext> {
  context: GradeManagementContext;

  constructor(public route: ActivatedRoute, public dialog: DialogRef<GradeManagementContext>, public apiService: ApiService, public modal: Modal) {
    this.context = dialog.context;
    console.log(this.context.grade);
}

  public close() {
    // just close the modal without saving.
    this.dialog.close();
  }

  /*public save() {
    // check if insert or update
    this.context.errorMessage = null;

    this.apiService.insertGrade(this.context.grade).subscribe(result => {
      console.log(result);
      this.dialog.close();
    }, error => {
      this.context.errorMessage = error;
    });
  }*/

  /*private getGrades() {
    this.apiService.getAllGrades().subscribe(data => {
      this.apiService.grades = data.result;
    });
  }*/
}
