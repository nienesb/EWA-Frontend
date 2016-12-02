import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(public router: Router, public apiService: ApiService) {}
}
