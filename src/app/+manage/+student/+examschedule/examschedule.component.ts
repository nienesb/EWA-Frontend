import { Component } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded ExamScheduleComponent.
 */
@Component({
  selector: 'sd-examschedule',
  templateUrl: './examschedule.component.html',
  styleUrls: ['./examschedule.component.scss']
})
export class ExamScheduleComponent {

  public loading: boolean = false;
  public errorMessage: string;
  public schemeBlok1Active: boolean = true;
  public schemeBlok2Active: boolean = false;
  public schemeBlok3Active: boolean = false;
  public schemeBlok4Active: boolean = false;

  public periodBlok1Active: boolean = true;
  public periodBlok2Active: boolean = false;
  public periodBlok3Active: boolean = false;
  public periodBlok4Active: boolean = false;

  constructor(public apiService: ApiService, public route: ActivatedRoute) {  }

  public activateSchemeBlok(blok: string) {
    switch (blok) {
      case 'schemeBlok1Active':
        this.schemeBlok1Active = true;
        this.schemeBlok2Active = false;
        this.schemeBlok3Active = false;
        this.schemeBlok4Active = false;
      break;
      case 'schemeBlok2Active':
        this.schemeBlok1Active = false;
        this.schemeBlok2Active = true;
        this.schemeBlok3Active = false;
        this.schemeBlok4Active = false;
      break;
      case 'schemeBlok3Active':
        this.schemeBlok1Active = false;
        this.schemeBlok2Active = false;
        this.schemeBlok3Active = true;
        this.schemeBlok4Active = false;
      break;
      case 'schemeBlok4Active':
        this.schemeBlok1Active = false;
        this.schemeBlok2Active = false;
        this.schemeBlok3Active = false;
        this.schemeBlok4Active = true;
      break;
    }
  }

  public activatePeriodBlok(blok: string) {
    switch (blok) {
      case 'periodBlok1Active':
        this.periodBlok1Active = true;
        this.periodBlok2Active = false;
        this.periodBlok3Active = false;
        this.periodBlok4Active = false;
      break;
      case 'periodBlok2Active':
        this.periodBlok1Active = false;
        this.periodBlok2Active = true;
        this.periodBlok3Active = false;
        this.periodBlok4Active = false;
      break;
      case 'periodBlok3Active':
        this.periodBlok1Active = false;
        this.periodBlok2Active = false;
        this.periodBlok3Active = true;
        this.periodBlok4Active = false;
      break;
      case 'periodBlok4Active':
        this.periodBlok1Active = false;
        this.periodBlok2Active = false;
        this.periodBlok3Active = false;
        this.periodBlok4Active = true;
      break;
    }
  }
}
