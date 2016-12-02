import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded RemedialComponent.
 */
@Component({
  selector: 'sd-remedial',
  templateUrl: './remedial.component.html',
  styleUrls: ['./remedial.component.scss']
})
export class RemedialComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(public route: ActivatedRoute) {}
}
