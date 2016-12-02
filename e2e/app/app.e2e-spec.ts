import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('AMBU Flow App Startup', function() {
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

  it('should display the Microsoft Azure Active Directory login page', () => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getTitle()).toEqual('Sign in to your account');
  });

  it('Should login in with given credentials.', () => {
    browser.ignoreSynchronization = true;
    let usernameField = element(by.id('cred_userid_inputtext'));
    let passwordField = element(by.id('cred_password_inputtext'));
    let loginbutton = element(by.id('cred_sign_in_button'));

    browser.driver.sleep(3000);

    usernameField.sendKeys('e2e.test@navara.nl');
    passwordField.sendKeys('Welkom01');

    browser.driver.sleep(3000);
    loginbutton.click();
  });
});
