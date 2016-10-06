import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/index';

/**
 * This class represents the LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [AuthService]
})

export class LoginComponent {
  public loading: boolean = false;
  public submitAttempt: boolean = false;
  public username: string;
  public password: string;

    constructor(public authService: AuthService, private router: Router) {}

    login(email: string, password: string) {
        this.loading = true;
        this.submitAttempt = true;
        if(this.authService.login(this.username, this.password)) {
            var timer = setInterval(() => {
                if (this.authService.isLoggedIn) {
                    clearInterval(timer);
                    this.router.navigate(['/home']);
                }
                if (this.authService.message) {
                    this.loading = false;
                    clearInterval(timer);
                }
            },200);
        }
        if (this.authService.message) {
            this.loading = false;
        }
    }
}
