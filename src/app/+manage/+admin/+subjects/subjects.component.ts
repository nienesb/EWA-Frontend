import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the lazy loaded SubjectsComponent.
 */
@Component({
  selector: 'sd-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
    public loading: boolean = false;
    public errorMessage: string;

    constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
      overlay.defaultViewContainer = vcRef;
    }
}
