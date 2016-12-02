import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded ManageComponent.
 */
@Component({
  selector: 'sd-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  public loading: boolean = false;
  public errorMessage: string;
  public patientsMenuActive: boolean = false;

  constructor(public route: ActivatedRoute, public router: Router, private _location: Location) {
    this.route.params.subscribe(params => {});
  }

  public goBack() {
    this._location.back();
  }
}
