import { Injectable } from '@angular/core';

/**
 * The application prefix
 */
const APP_PREFIX = 'ngrxtmp-';

/**
 * LocalStorageService abstracts localStorage operations
 * and also loads localStorage objects into application state
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  /**
   * Inject necessary services
   */
  constructor() {}

  /**
   * loadInitialState loads localStorage items into application state
   */
  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map(key =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0).toUpperCase() + token.slice(1)
              )
              .join('')
          );
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }

  /**
   * setItem stringifies an object then stores in localStorage
   * @param key the key of the item to set
   * @param value the value of the item to set
   */
  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  /**
   * getItem retrieves an item from localStorage and parses it as JSON
   * @param key the key of the item to retrieve
   */
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
  }

  /**
   * removeItem removes an item from localStorage
   * @param key the key of the item to remove
   */
  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  /**
   * Tests that localStorage exists, can be written to, and read from.
   * */
  testLocalStorage() {
    const testValue = 'testValue';
    const testKey = 'testKey';
    let retrievedValue: string;
    const errorMessage = 'localStorage did not return expected value';

    this.setItem(testKey, testValue);
    retrievedValue = this.getItem(testKey);
    this.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
