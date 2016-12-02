import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/index';

export const HomeRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];
