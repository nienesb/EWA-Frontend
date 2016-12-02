/* tslint:disable:no-unused-variable */
import { AppPage } from './details.po';
import { browser, element, by } from 'protractor';

describe('AMBU Flow Notes', function() {
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
    page.navigateTo();
    expect(page.getTitle()).toEqual('AMBU Flow');
  });

  it('Should display the details title', () => {
    browser.ignoreSynchronization = false;
    let parent = element(by.className('nav-title'));
    let child = parent.element(by.tagName('span'));
    expect(child.getText()).toEqual('Details');
  });

});
