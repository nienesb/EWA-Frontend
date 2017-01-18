import { Route } from '@angular/router';
import { ManageComponent } from './index';
import { ExamScheduleComponent } from './+student/+examschedule/index';
import { PropPhaseComponent } from './+student/+propphase/index';
import { StudentComponent } from './+student/index';
import { TeacherComponent } from './+teacher/index';
import { GradesComponent } from './+teacher/+grades/index';
import { AdminComponent } from './+admin/index';
import { SubjectsComponent } from './+admin/+subjects/index';
import { AuthGuard } from '../shared/index';

export const ManageRoutes: Route[] = [
{
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        component: StudentComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'propphase',
            pathMatch: 'full'
          },
          {
            path: 'propphase',
            component: PropPhaseComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'examschedule',
            component: ExamScheduleComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'teacher',
        component: TeacherComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'grades',
            pathMatch: 'full'
          },
          {
            path: 'grades',
            component: GradesComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'subjects',
            pathMatch: 'full'
          },
          {
            path: 'subjects',
            component: SubjectsComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ]
  }
];
