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
  public blok1Active: boolean = true;
  public blok2Active: boolean = false;
  public blok3Active: boolean = false;
  public blok4Active: boolean = false;

  constructor(public route: ActivatedRoute, public router: Router) {}

  activateBlok(blok: string) {
    switch(blok) {
      case 'blok1Active':
        this.blok1Active = true;
        this.blok2Active = false;
        this.blok3Active = false;
        this.blok4Active = false;
      break;
      case 'blok2Active':
        this.blok1Active = false;
        this.blok2Active = true;
        this.blok3Active = false;
        this.blok4Active = false;
      break;
      case 'blok3Active':
        this.blok1Active = false;
        this.blok2Active = false;
        this.blok3Active = true;
        this.blok4Active = false;
      break;
      case 'blok4Active':
        this.blok1Active = false;
        this.blok2Active = false;
        this.blok3Active = false;
        this.blok4Active = true;
      break;
    }
  }
}
