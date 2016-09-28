import { Component } from '@angular/core';
import { Config } from './shared/index';
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(private translate: TranslateService) {
    console.log('Environment config', Config);
    document.getElementById('preloader').style.display = 'none';

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('nl');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('nl');
  }
}
