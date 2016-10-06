import { Route } from '@angular/router';
import { ExamScheduleComponent } from './index';
import { AuthGuard } from '../shared/index';

export const ExamScheduleRoutes: Route[] = [
  {
    path: 'examschedule',
    component: ExamScheduleComponent,
    canActivate: [AuthGuard]
  }
];
