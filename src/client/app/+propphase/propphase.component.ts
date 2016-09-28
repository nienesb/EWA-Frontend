import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded PropPhaseComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-propphase',
  templateUrl: 'propphase.component.html',
  styleUrls: ['propphase.component.css']
})
export class PropPhaseComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(public route: ActivatedRoute, public router: Router) {}
}
