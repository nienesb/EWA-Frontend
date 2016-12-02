import { browser } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/trip/88-16-222/info/notes');
  }

  getTitle() {
    return browser.getTitle();
  }
}
