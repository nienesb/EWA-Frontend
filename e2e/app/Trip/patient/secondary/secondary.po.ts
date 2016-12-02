import { browser } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/trip/88-16-222/patient/0/secondary');
  }

  getTitle() {
    return browser.getTitle();
  }
}
