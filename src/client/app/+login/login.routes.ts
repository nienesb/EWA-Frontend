import { Route } from '@angular/router';
import { LoginComponent } from './index';
import { AuthGuard, AuthService } from '../shared/index';


export const LoginRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const authProviders = [AuthGuard, AuthService];
