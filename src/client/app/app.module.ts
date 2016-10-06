import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeModule } from './+home/home.module';
import { LoginModule } from './+login/login.module';
import { AboutModule } from './+about/about.module';
import { PropPhaseModule } from './+propphase/propphase.module';
import { ExamScheduleModule } from './+examschedule/examschedule.module';
import { RemedialModule } from './+remedial/remedial.module';

import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
  imports:
  [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes),
    AboutModule, HomeModule, PropPhaseModule, ExamScheduleModule, RemedialModule, LoginModule, SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
