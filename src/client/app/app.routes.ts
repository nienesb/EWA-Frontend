import { Routes, provideRoutes } from '@angular/router';
import { LoginRoutes, authProviders } from './+login/index';
import { HomeRoutes } from './+home/index';
import { AboutRoutes } from './+about/index';
import { PropPhaseRoutes } from './+propphase/index';
import { ExamScheduleRoutes } from './+examschedule/index';
import { RemedialRoutes } from './+remedial/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...PropPhaseRoutes,
  ...ExamScheduleRoutes,
  ...RemedialRoutes,
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRoutes(routes),
  authProviders
];
