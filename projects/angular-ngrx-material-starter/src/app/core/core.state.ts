import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';

/**
 * The overall application reducer, composed of feature reducers
 */
export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer
};

/**
 * The application meta reducer, composed of meta reducers
 */
export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

/**
 * Select the AuthState slice from application state
 */
export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

/**
 * Select the SettingsState slice from application state
 */
export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

/**
 * Select the RouterStateUrl slice from application state
 */
export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

/**
 * The overall application state, composed of feature states
 */
export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
