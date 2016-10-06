import { Route } from '@angular/router';
import { AboutComponent } from './index';
import { AuthGuard } from '../shared/index';

export const AboutRoutes: Route[] = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  }
];
