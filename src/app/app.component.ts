import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api/api.service';
import { AdalService } from './shared/adal/adal.service';
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  selector: 'sd-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(private adalService: AdalService, private apiService: ApiService, private translate: TranslateService) {

    adalService.init({
      tenant: 'ee6564fc-c4f2-47f6-a07f-995228564fb6',
      clientId: 'b6be20d6-e98a-43e6-bbc2-30f7a0dc9222',
      cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.  
      // Also, token acquisition for the To Go API will fail in IE when running on localhost, due to IE security restrictions.
    });
    adalService.handleWindowCallback();

    document.getElementById('preloader').style.display = 'none';

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('nl');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('nl');
  }

  ngOnInit() {
    this.apiService.getUserByMail(this.adalService.userInfo.userName).subscribe(data => {
      this.apiService.user = data;
      console.log(this.apiService.user);
    });
  }
}
