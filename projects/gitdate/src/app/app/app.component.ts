import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

import {
  authLogout,
  routeAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '../core/settings/settings.actions';

/**
 * The root application component
 */
@Component({
  selector: 'ngrxtmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  /**
   * Is the app in production?
   */
  isProd = env.production;

  /**
   * The environment name
   */
  envName = env.envName;

  /**
   * The app version
   */
  version = env.versions.app;

  /**
   * The current year
   */
  year = new Date().getFullYear();

  /**
   * The app logo location
   */
  logo = require('../../assets/logo.png').default;

  /**
   * The available languages
   */
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];

  /**
   * The navigation links
   */
  navigation = [
    { link: 'about', label: 'ngrxtmp.menu.about' },
    { link: 'connect', label: 'ngrxtmp.menu.connect' },
    { link: 'matches', label: 'ngrxtmp.menu.matches' }
  ];

  /**
   * The navigate links for the side menu
   */
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'ngrxtmp.menu.settings' }
  ];

  /**
   * Is the user authenticated?
   */
  isAuthenticated$: Observable<boolean>;

  /**
   * Does the user prefer a sticky header?
   */
  stickyHeader$: Observable<boolean>;

  /**
   * The user's preffered language
   */
  language$: Observable<string>;

  /**
   * The user's preferred theme
   */
  theme$: Observable<string>;

  /**
   * Inject necessary services
   * @param store The NGRX store
   * @param storageService The localStorage service
   */
  constructor(
    private store: Store,
    private storageService: LocalStorageService
  ) {}

  /**
   * Is the user's browser IE, Edge, or Safari?
   */
  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  /**
   * Test if localStorage works, set browser specific settings, then select
   * the user's settings from the store
   */
  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  /**
   * Dispatch the authLogout action
   */
  onLogoutClick() {
    this.store.dispatch(authLogout());
    localStorage.removeItem('username');
  }

  /**
   * Dispatch the change language action with language payload
   * @param param0
   */
  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }
}
