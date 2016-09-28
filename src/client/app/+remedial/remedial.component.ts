import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded RemedialComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-remedial',
  templateUrl: 'remedial.component.html',
  styleUrls: ['remedial.component.css']
})
export class RemedialComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(public route: ActivatedRoute, public router: Router) {}
}
