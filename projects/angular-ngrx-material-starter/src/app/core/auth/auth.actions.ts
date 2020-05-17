import { createAction, props } from '@ngrx/store';

export const authLogin = createAction(
    '[Auth] Login',
    props<{ username: string, password: string }>());
export const authLoginSuccess = createAction('[Auth] Login Success');
export const authLoginFailure = createAction('[Auth] Login Failure');
export const authLogout = createAction('[Auth] Logout');
export const authLogoutSuccess = createAction('[Auth] Logout Success');
export const authLogoutFailure = createAction('[Auth] Logout Failure');


