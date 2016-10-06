import { Route } from '@angular/router';
import { PropPhaseComponent } from './index';
import { AuthGuard } from '../shared/index';

export const PropPhaseRoutes: Route[] = [
  {
    path: 'propphase',
    component: PropPhaseComponent,
    canActivate: [AuthGuard]
  }
];
