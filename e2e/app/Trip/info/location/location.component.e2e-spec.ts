/* tslint:disable:no-unused-variable */
import { AppPage } from './location.po';
import { browser, element, by } from 'protractor';

describe('AMBU Flow Location', function() {
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

  it('Should display the evaluation title', () => {
    browser.ignoreSynchronization = false;
    let parent = element(by.className('nav-title'));
    let child = parent.element(by.tagName('span'));
    expect(child.getText()).toEqual('Locatie');
  });

  it('Should be able to clear the input fields for pickupLocation', () => {
    let clearAddressButton = element(by.id('clearpickloc'));
    clearAddressButton.click();

    // are the pickup location fields realy empty? We need to check that.
    expect(element(by.id('pickupHospital')).$('option:checked').getText()).toEqual('');
    expect(element(by.id('picksnelweg')).getText()).toEqual('');
    expect(element(by.id('pickstraatnaam')).getText()).toEqual('');
    expect(element(by.id('pickhuisnummer')).getText()).toEqual('');
    expect(element(by.id('pickhuisnrtoe')).getText()).toEqual('');
    expect(element(by.id('pickhuisnraand')).getText()).toEqual('');
    expect(element(by.id('pickpostcode')).getText()).toEqual('');
    expect(element(by.id('pickwoonplaats')).getText()).toEqual('');
    expect(element(by.id('pickland')).$('option:checked').getText()).toEqual('Nederland');
  });

  it('Should be able to clear the input fields for deliveryLocation', () => {
    let clearAddressButton = element(by.id('cleardelloc'));
    clearAddressButton.click();

    expect(element(by.id('deliveryHospital')).$('option:checked').getText()).toEqual('');
    expect(element(by.id('delsnelweg')).getText()).toEqual('');
    expect(element(by.id('delstraatnaam')).getText()).toEqual('');
    expect(element(by.id('delhuisnummer')).getText()).toEqual('');
    expect(element(by.id('delhuisnrtoe')).getText()).toEqual('');
    expect(element(by.id('delhuisnraand')).getText()).toEqual('');
    expect(element(by.id('delpostcode')).getText()).toEqual('');
    expect(element(by.id('delwoonplaats')).getText()).toEqual('');
    expect(element(by.id('delland')).$('option:checked').getText()).toEqual('Nederland');
  });
});
