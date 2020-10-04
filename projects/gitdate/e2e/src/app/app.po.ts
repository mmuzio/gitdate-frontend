import { browser, by, element } from 'protractor';

/**
 * End-to-end tests for AppComponent
 */
export class AppPage {
  /**
   * Test navigate to home page
   */
  navigateTo() {
    return browser.get('/');
  }

  /**
   * Test get the current year from the footer
   */
  getCurrentYear() {
    return element(by.css('.signature .year')).getText();
  }

  /**
   * Test get the navigation elements
   */
  getAllMenus() {
    return element
      .all(by.css('mat-toolbar button.nav-button'))
      .map(elm => elm.getText());
  }
}
