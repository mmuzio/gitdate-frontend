import { AppState } from '../core.module';

/**
 * The theme applied for night mode
 */
export const NIGHT_MODE_THEME = 'BLACK-THEME';

/**
 * The language options
 */
export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br' | 'he';

/**
 * The Gittit sort options
 */
export type SortOption = 'New' | 'Top';

/**
 * The Gittit top sort range options
 */
export type TopSortRangeOption =
  | 'TODAY'
  | 'WEEK'
  | 'MONTH'
  | 'YEAR'
  | 'ALL-TIME';

/**
 * SettingsState interface
 */
export interface SettingsState {
  /**
   * The user's preffered language
   */
  language: string;

  /**
   * The user's preffered theme
   */
  theme: string;

  /**
   * True if the user prefers autoNightMode on
   */
  autoNightMode: boolean;

  /**
   * The theme to be applied for night mode
   */
  nightTheme: string;

  /**
   * True if the user prefers a sticky header
   */
  stickyHeader: boolean;

  /**
   * True if the user prefers page animations
   */
  pageAnimations: boolean;

  /**
   * True if the user prefers page animations to be disabled
   */
  pageAnimationsDisabled: boolean;

  /**
   * True if the user prefers element animations
   */
  elementsAnimations: boolean;

  /**
   * The current hour localized to the user
   */
  hour: number;

  /**
   * The user's preferred Gittit sorting option
   */
  sortOption: string;

  /**
   * The user's preferred Gittit sorting date range when sorting by TOP
   */
  topSortRange: string;
}

/**
 * State interface, currently composed of
 * just SettingsState, but may be extended
 */
export interface State extends AppState {
  /**
   * SettingsState
   */
  settings: SettingsState;
}
