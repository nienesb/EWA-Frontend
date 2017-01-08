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
import { MatchesCategoryPipe } from './pipes/matchescategory/matchescategory.pipe';

import { AdalService } from './adal/adal.service';
import { ApiService } from './api/index';
import { AuthGuard, AuthHttp, AuthService } from './auth/index';

import { DatePickerComponent } from './datepicker/index';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/components/buttons';
import { TooltipModule } from 'ng2-bootstrap/components/tooltip';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports:
  [
    CommonModule, RouterModule, BrowserModule, FormsModule, ModalModule.forRoot(),
    BootstrapModalModule, TooltipModule, ButtonsModule,
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
      })
  ],
  declarations:
  [
    ToolbarComponent, NavbarComponent, TabComponent, TabsComponent, LangSwitcherComponent, DatePickerComponent, MatchesCategoryPipe
  ],
  entryComponents: [],
  exports:
  [
    ToolbarComponent, NavbarComponent, CommonModule, FormsModule, BrowserModule,
    RouterModule, TranslateModule, TabComponent, TabsComponent, LangSwitcherComponent,
    ModalModule, BootstrapModalModule, DatePickerComponent, TooltipModule, ButtonsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AdalService, ApiService, AuthGuard, AuthHttp, AuthService, MatchesCategoryPipe]
    };
  }
}
