import { createSelector } from '@ngrx/store';

import { selectAuthState } from '../core.state';
import { AuthState } from './auth.models';

/**
 * Select full auth state
 */
export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

/**
 * Select only isAuthenticated from auth state
 */
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);
