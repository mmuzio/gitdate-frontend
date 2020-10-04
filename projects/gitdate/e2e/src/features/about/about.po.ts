import { browser, by, element } from 'protractor';

/**
 * End-to-end tests for AboutComponent
 */
export class AboutPage {
  /**
   * Test navigate to about page
   */
  navigateTo() {
    return browser.get('/about');
  }

  /**
   * Test get the header text
   */
  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  /**
   * Test get the getting started content
   */
  getGettingStarted() {
    return element(by.css('.get-started'));
  }

  /**
   * Test get the action buttons
   * @param idx The id of the action button
   */
  getActionButton(idx) {
    return element.all(by.css('.actions a')).get(idx);
  }
}
