import { AuthState } from './auth.models';
import {
  authLogin,
  authLoginSuccess,
  authLoginFailure,
  authLogout
} from './auth.actions';
import { createReducer, on, Action } from '@ngrx/store';

/**
 * The initial authentication state
 */
export const initialState: AuthState = {
  username: '',
  isAuthenticated: false
};

/**
 * Reducer to update Auth State
 */
const reducer = createReducer(
  initialState,
  on(authLogin, state => ({ ...state, isAuthenticated: true })),
  on(authLoginSuccess, state => ({ ...state, isAuthenticated: true })),
  on(authLoginFailure, state => ({ ...state, isAuthenticated: false })),
  on(authLogout, state => ({ ...state, isAuthenticated: false }))
);

/**
 * authReducer takes old state and an action and returns new state
 * @param state The authentication state
 * @param action The authentication action
 */
export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
