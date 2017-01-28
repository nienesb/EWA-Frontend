import { Route } from '@angular/router';
import { ManageComponent } from './index';
import { ExamScheduleComponent } from './+student/+examschedule/index';
import { PropPhaseComponent } from './+student/+propphase/index';
import { StudentComponent } from './+student/index';
import { TeacherComponent } from './+teacher/index';
import { GradesComponent } from './+teacher/+grades/index';
import { AdminComponent } from './+admin/index';
import { SubjectsComponent } from './+admin/+subjects/index';
import { GroupsComponent } from './+admin/+groups/index';
import { AuthGuard, StudentAuthGuard, TeacherAuthGuard, AdminAuthGuard } from '../shared/index';

export const ManageRoutes: Route[] = [
{
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        component: StudentComponent,
        canActivate: [AuthGuard, StudentAuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'propphase',
            pathMatch: 'full'
          },
          {
            path: 'propphase',
            component: PropPhaseComponent,
            canActivate: [AuthGuard, StudentAuthGuard]
          },
          {
            path: 'examschedule',
            component: ExamScheduleComponent,
            canActivate: [AuthGuard, StudentAuthGuard]
          }
        ]
      },
      {
        path: 'teacher',
        component: TeacherComponent,
        canActivate: [AuthGuard, TeacherAuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'grades',
            pathMatch: 'full'
          },
          {
            path: 'grades',
            component: GradesComponent,
            canActivate: [AuthGuard, TeacherAuthGuard]
          }
        ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'subjects',
            pathMatch: 'full'
          },
          {
            path: 'subjects',
            component: SubjectsComponent,
            canActivate: [AuthGuard, AdminAuthGuard]
          },
          {
            path: 'groups',
            component: GroupsComponent,
            canActivate: [AuthGuard, AdminAuthGuard]
          }
        ]
      }
    ]
  }
];
