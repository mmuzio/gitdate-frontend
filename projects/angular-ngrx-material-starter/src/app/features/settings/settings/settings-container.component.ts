import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme,
  actionSettingsChangeStickyHeader
} from '../../../core/settings/settings.actions';
import { SettingsState, State } from '../../../core/settings/settings.model';
import { selectSettings } from '../../../core/settings/settings.selectors';

/**
 * SettingsContainerComponent gives the user option to change 
 * various settings
 */
@Component({
  selector: 'ngrxtmp-settings',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnInit {

  /**
   * An attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  /**
   * The settings state
   */
  settings$: Observable<SettingsState>;

  /**
   * Array of language options
   */
  languages = [
    { value: 'en', label: 'en' },
    { value: 'de', label: 'de' },
    { value: 'sk', label: 'sk' },
    { value: 'fr', label: 'fr' },
    { value: 'es', label: 'es' },
    { value: 'pt-br', label: 'pt-br' },
    { value: 'zh-cn', label: 'zh-cn' },
    { value: 'he', label: 'he' }
  ];

  /**
   * Array of available themes
   */
  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' }
  ];

  /**
   * Inject necessary services
   * @param store The NGRX store
   */
  constructor(private store: Store<State>) {}

  /**
   * Select the current settings from the NGRX store
   */
  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  /**
   * Dispatch change settings action with language payload
   * @param param0 The selected language
   */
  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  /**
   * Dispatch change theme action with theme payload
   * @param param0 The selected theme
   */
  onThemeSelect({ value: theme }) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }

  /**
   * Dispatch change auto night mode action with autoNightMode payload
   * @param param0 The seleced value of autoNightMode
   */
  onAutoNightModeToggle({ checked: autoNightMode }) {
    this.store.dispatch(actionSettingsChangeAutoNightMode({ autoNightMode }));
  }

  /**
   * Dispatch change sticky header action with stickyHeader payload
   * @param param0 The selected value of stickyHeader
   */
  onStickyHeaderToggle({ checked: stickyHeader }) {
    this.store.dispatch(actionSettingsChangeStickyHeader({ stickyHeader }));
  }

  /**
   * Dispatch change animations page action with pageAnimations payload
   * @param param0 the selected value of pageAnimations
   */
  onPageAnimationsToggle({ checked: pageAnimations }) {
    this.store.dispatch(actionSettingsChangeAnimationsPage({ pageAnimations }));
  }

  /**
   * Dispatch change animations elements action with elementsAnimations payload
   * @param param0 The selected value of elementsAnimations
   */
  onElementsAnimationsToggle({ checked: elementsAnimations }) {
    this.store.dispatch(
      actionSettingsChangeAnimationsElements({ elementsAnimations })
    );
  }
}
