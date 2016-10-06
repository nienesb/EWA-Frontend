import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(!localStorage.getItem('EwaAuthentication')) {
      this.router.navigate(['/login']);
    }
    return localStorage.getItem('EwaAuthentication') ? true : false;
  }
}
