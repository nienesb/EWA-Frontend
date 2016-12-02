/* tslint:disable:no-unused-variable */
import { AppPage } from './home.po';
import { browser, element, by } from 'protractor';

describe('AMBU Flow App Home', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(() => {
    browser.manage().logs().get('browser').then(function(browserLogs) {
      // browserLogs is an array of objects with level and message fields
      browserLogs.forEach(function(log){
          if (log.level.value > 900) { // it's an error log
            console.log('Browser console error!');
            console.log(log.message);
          }
      });
    });
  });

  it('Should display the AMBU Flow browser title', () => {
    browser.ignoreSynchronization = false;
    expect(page.getTitle()).toEqual('AMBU Flow');
  });

});
