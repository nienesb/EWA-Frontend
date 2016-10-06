import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent{

  public loading: boolean = false;
  public errorMessage: string;

  public tripsPageActive: boolean = true;
  public patientPageActive: boolean = false;
  public financePageActive: boolean = false;
  public tripsActive: string = 'active';
  public patientActive: string;
  public financeActive: string;

  constructor(public router: Router) { }

  activateTab(tab: string) {
    switch(tab) {
      case 'trips':
        this.tripsPageActive = true;
        this.patientPageActive = false;
        this.financePageActive = false;
      break;
      case 'patient':
        this.tripsPageActive = false;
        this.patientPageActive = true;
        this.financePageActive = false;
      break;
      case 'finance':
        this.tripsPageActive = false;
        this.patientPageActive = false;
        this.financePageActive = true;
      break;
      default:break;
    }

    this.tripsActive = this.tripsPageActive ? 'active' : '';
    this.patientActive = this.patientPageActive ? 'active' : '';
    this.financeActive = this.financePageActive ? 'active' : '';
  };
}

