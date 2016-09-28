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

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports:
  [
    CommonModule, RouterModule, BrowserModule, FormsModule,
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
    RouterModule, TranslateModule, TabComponent, TabsComponent, LangSwitcherComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
