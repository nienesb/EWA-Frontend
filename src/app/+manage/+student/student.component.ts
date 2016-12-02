import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(public route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef, public router: Router) { }
}
