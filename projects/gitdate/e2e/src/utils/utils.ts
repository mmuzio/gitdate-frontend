import { browser } from 'protractor';

/**
 * Utility function to get current route URL
 */
export const getCurrentRouteUrl = () =>
  browser.getCurrentUrl().then(url => url.substr(url.lastIndexOf('/') + 1));
