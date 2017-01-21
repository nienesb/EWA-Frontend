import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/index';
import { AdalService } from '../../shared/adal/adal.service';

/**
 * This class represents the lazy loaded AdminComponent.
 */
@Component({
  selector: 'sd-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(private adalService: AdalService, public apiService: ApiService, public route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef, public router: Router) {
    this.apiService.getGroups().subscribe(data => {
      this.apiService.groups = data;
      console.log(this.apiService.groups);
    });
  }
}
