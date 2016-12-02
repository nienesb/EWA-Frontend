import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the lazy loaded PropPhaseComponent.
 */
@Component({
  selector: 'sd-propphase',
  templateUrl: './propphase.component.html',
  styleUrls: ['./propphase.component.scss']
})
export class PropPhaseComponent {
    public loading: boolean = false;
    public errorMessage: string;
    public blok1Active: boolean = true;
    public blok2Active: boolean = false;
    public blok3Active: boolean = false;
    public blok4Active: boolean = false;

    constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
      overlay.defaultViewContainer = vcRef;
    }

    activateBlok(blok: string) {
    switch (blok) {
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
