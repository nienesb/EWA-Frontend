import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppConfig } from './shared/config/app.config';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeModule } from './+home/home.module';
import { ManageModule } from './+manage/manage.module';
import { ExamScheduleModule } from './+manage/+student/+examschedule/examschedule.module';
import { PropPhaseModule } from './+manage/+student/+propphase/propphase.module';
import { StudentModule } from './+manage/+student/student.module';
import { TeacherModule } from './+manage/+teacher/teacher.module';
import { GradesModule } from './+manage/+teacher/+grades/grades.module';

import { AdminModule } from './+manage/+admin/admin.module';
import { SubjectsModule } from './+manage/+admin/+subjects/subjects.module';

import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
  imports:
  [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes),
    HomeModule, ManageModule, ExamScheduleModule, PropPhaseModule, StudentModule, TeacherModule, GradesModule, AdminModule, SubjectsModule, SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
