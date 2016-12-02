import { Routes } from '@angular/router';
import { HomeRoutes } from './+home/index';
import { ManageRoutes } from './+manage/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...ManageRoutes
];
