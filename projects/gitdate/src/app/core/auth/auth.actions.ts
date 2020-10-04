import { createAction, props } from '@ngrx/store';

/**
 * authLogin action for login attempt
 */
export const authLogin = createAction(
  '[Auth] Login',
  props<{ username: string }>()
);

/**
 * authLoginSuccess for successful authentication
 */
export const authLoginSuccess = createAction('[Auth] Login Success');

/**
 * authLoginFailure for unsuccessful authentication
 */
export const authLoginFailure = createAction('[Auth] Login Failure');

/**
 * authLogout for logout attempt
 */
export const authLogout = createAction('[Auth] Logout');

/**
 * authLogoutSuccess for successful logout
 */
export const authLogoutSuccess = createAction('[Auth] Logout Success');

/**
 * authLogoutFailure for unsuccessful logout
 */
export const authLogoutFailure = createAction('[Auth] Logout Failure');
