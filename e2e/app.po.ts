import { browser, element, by } from 'protractor';

export class AVOCAChartsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('avo-root h1')).getText();
  }
}
