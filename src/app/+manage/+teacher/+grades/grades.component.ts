import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the lazy loaded GradesComponent.
 */
@Component({
  selector: 'sd-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {
    public loading: boolean = false;
    public errorMessage: string;

    constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
      overlay.defaultViewContainer = vcRef;
    }
}
