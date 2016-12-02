import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdalService } from '../adal/index';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private adalService: AdalService, private router: Router) {}

  canActivate() {
    if (!this.adalService.userInfo.isAuthenticated) {
      this.adalService.login();
      return false;
    } else {
      // console.log('AuthGuard: User is logged in as ' + this.adalService.userInfo.userName);
      return true;
    }
  }
}
