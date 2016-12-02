import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'sd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	public settingsSubMenu: boolean = false;
	public usersSubMenu: boolean = false;
	public activeUserClass: string;
	public activeSettingsClass: string;
	public isMenuCollapsed: boolean = false;

	constructor(public route: ActivatedRoute, public router: Router) {}

	public toggleSettingsSubMenu() {
		this.settingsSubMenu = !this.settingsSubMenu;
		this.activeSettingsClass = this.settingsSubMenu ? 'active' : '';
	}

	public toggleUsersSubMenu() {
		this.usersSubMenu = !this.usersSubMenu;
		this.activeUserClass = this.usersSubMenu ? 'active' : '';
	}

	public toggleMenu() {
		this.isMenuCollapsed = !this.isMenuCollapsed;
		if (this.isMenuCollapsed) {
		document.getElementById('sd-app').className = 'menu-collapsed';
		} else {
		document.getElementById('sd-app').className = '';
		}
	}
}
