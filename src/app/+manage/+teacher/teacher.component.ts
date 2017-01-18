import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/index';
import { AdalService } from '../../shared/adal/adal.service';

/**
 * This class represents the lazy loaded TeacherComponent.
 */
@Component({
  selector: 'sd-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(private adalService: AdalService, public apiService: ApiService, public route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef, public router: Router) {

  }
}
