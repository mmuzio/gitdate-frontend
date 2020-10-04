import { createSelector } from '@ngrx/store';

import { SettingsState } from './settings.model';
import { selectSettingsState } from '../core.state';

/**
 * Select full settings state
 */
export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

/**
 * Select stickyHeader value from settings state
 */
export const selectSettingsStickyHeader = createSelector(
  selectSettings,
  (state: SettingsState) => state.stickyHeader
);

/**
 * Select language value from settings state
 */
export const selectSettingsLanguage = createSelector(
  selectSettings,
  (state: SettingsState) => state.language
);

/**
 * Select theme value from settings state
 */
export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme
);

/**
 * Select pageAnimations value from settings state
 */
export const selectPageAnimations = createSelector(
  selectSettings,
  settings => settings.pageAnimations
);

/**
 * Select elementsAnimations value from settings state
 */
export const selectElementsAnimations = createSelector(
  selectSettings,
  settings => settings.elementsAnimations
);

/**
 * Select autoNightMode value from settings state
 */
export const selectAutoNightMode = createSelector(
  selectSettings,
  settings => settings.autoNightMode
);

/**
 * Select nightTheme value from settings state
 */
export const selectNightTheme = createSelector(
  selectSettings,
  settings => settings.nightTheme
);

/**
 * Select hour value from settings state
 */
export const selectHour = createSelector(
  selectSettings,
  settings => settings.hour
);

/**
 * selectIsNightHour selects night mode if current hour is
 * in night mode time window
 */
export const selectIsNightHour = createSelector(
  selectAutoNightMode,
  selectHour,
  (autoNightMode, hour) => autoNightMode && (hour >= 21 || hour <= 7)
);

/**
 * selectEffectiveTheme returns the current theme, which depends on the
 * current hour and if the user has selected a night theme and autoNightMode
 */
export const selectEffectiveTheme = createSelector(
  selectTheme,
  selectNightTheme,
  selectIsNightHour,
  (theme, nightTheme, isNightHour) =>
    (isNightHour ? nightTheme : theme).toLowerCase()
);

/**
 * Select Gittit sort option value from settings state
 */
export const selectSortOption = createSelector(
  selectSettings,
  (state: SettingsState) => state.sortOption
);

/**
 * Select Gittit sort option value from settings state
 */
export const selectTopSortRange = createSelector(
  selectSettings,
  (state: SettingsState) => state.topSortRange
);
