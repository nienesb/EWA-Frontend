import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
	public settingsSubMenu: boolean = false;
	public StudyProgressSubMenu: boolean = false;
	public activeStudyProgressClass: string;
	public activeSettingsClass: string;
	public isMenuCollapsed: boolean = false;

	constructor(public route: ActivatedRoute, public router: Router) {}

	public toggleSettingsSubMenu() {
		this.settingsSubMenu = !this.settingsSubMenu;
		this.activeSettingsClass = this.settingsSubMenu ? 'active' : '';
	}

	public toggleStudyProgressSubMenu() {
		this.StudyProgressSubMenu = !this.StudyProgressSubMenu;
		this.activeStudyProgressClass = this.StudyProgressSubMenu ? 'active' : '';
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
