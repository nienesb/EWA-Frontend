import { Route } from '@angular/router';
import { RemedialComponent } from './index';
import { AuthGuard } from '../shared/index';

export const RemedialRoutes: Route[] = [
  {
    path: 'remedial',
    component: RemedialComponent,
    canActivate: [AuthGuard]
  }
];
