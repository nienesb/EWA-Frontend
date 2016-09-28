import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded ExamScheduleComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-examschedule',
  templateUrl: 'examschedule.component.html',
  styleUrls: ['examschedule.component.css']
})
export class ExamScheduleComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(public route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef, public router: Router) {}
}
