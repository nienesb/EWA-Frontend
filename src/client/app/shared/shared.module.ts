import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { TabComponent, TabsComponent } from './tabs/index';
import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { LangSwitcherComponent } from './lang-switcher/index';

import { ApiService } from './api/index';
import { AuthGuard, AuthService } from './auth/index';

import { CalendarModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports:
  [
    CommonModule, RouterModule, BrowserModule, FormsModule, CalendarModule, ConfirmDialogModule, ModalModule.forRoot(),
    BootstrapModalModule,
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
      })
  ],
  declarations: [ToolbarComponent, NavbarComponent, TabComponent, TabsComponent, LangSwitcherComponent],
  exports:
  [
    ToolbarComponent, NavbarComponent, CommonModule, FormsModule, BrowserModule,
    RouterModule, TranslateModule, TabComponent, TabsComponent, LangSwitcherComponent,
    CalendarModule, ConfirmDialogModule, ModalModule, BootstrapModalModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ApiService, AuthGuard, AuthService, ConfirmationService]
    };
  }
}
