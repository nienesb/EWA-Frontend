import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {

  public isMenuCollapsed: boolean = false;
  public profileImageSource: string = 'https://www.drupal.org/files/profile_default.png';
  public menuActive: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (this.isMenuCollapsed) {
      document.getElementById('sd-app').className = 'menu-collapsed';
    } else {
      document.getElementById('sd-app').className = '';
    }
  }

  public toggleProfileMenu() {
    this.menuActive = !this.menuActive;
  }

  public logout() {
    this.menuActive = false;
    localStorage.removeItem('EwaAuthentication');
    this.router.navigate(['/login']);
  }
}
