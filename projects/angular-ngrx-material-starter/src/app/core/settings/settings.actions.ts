import { createAction, props } from '@ngrx/store';

import { Language } from './settings.model';

/**
 * actionSettingsChangeLanguage action for language change
 */
export const actionSettingsChangeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>()
);

/**
 * actionSettingsChangeTheme action for theme change
 */
export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: string }>()
);

/**
 * actionSettingsChangeAutoNightMode action for autoNightMode change
 */
export const actionSettingsChangeAutoNightMode = createAction(
  '[Settings] Change Auto Night Mode',
  props<{ autoNightMode: boolean }>()
);

/**
 * actionSettingsChangeStickyHeader action for stickyHeader change
 */
export const actionSettingsChangeStickyHeader = createAction(
  '[Settings] Change Sticky Header',
  props<{ stickyHeader: boolean }>()
);

/**
 * actionSettingsChangeAnimationsPage action for animationsPage change
 */
export const actionSettingsChangeAnimationsPage = createAction(
  '[Settings] Change Animations Page',
  props<{ pageAnimations: boolean }>()
);

/**
 *actionSettingsChangeAnimationsPageDisabled action for animationsPageDisabled change
 */
export const actionSettingsChangeAnimationsPageDisabled = createAction(
  '[Settings] Change Animations Page Disabled',
  props<{ pageAnimationsDisabled: boolean }>()
);

/**
 * actionSettingsChangeAnimationsElements action for animationsElements change
 */
export const actionSettingsChangeAnimationsElements = createAction(
  '[Settings] Change Animations Elements',
  props<{ elementsAnimations: boolean }>()
);

/**
 * actionSettingsChangeHour action for hour change
 */
export const actionSettingsChangeHour = createAction(
  '[Settings] Change Hours',
  props<{ hour: number }>()
);
