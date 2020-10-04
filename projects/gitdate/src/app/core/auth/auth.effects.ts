import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

import {
  authLogin,
  authLogout,
  authLoginSuccess,
  authLoginFailure
} from './auth.actions';

/**
 * The authentication storage key
 */
export const AUTH_KEY = 'AUTH';

/**
 * AuthEffects includes side effects for authentication actions
 */
@Injectable()
export class AuthEffects {
  /**
   * Inject necessary services
   * @param actions$ NGRX effects actions
   * @param localStorageService The localStorage service
   * @param router The Angular router
   */
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  /**
   * Set isAuthenticated to true on successful login
   */
  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogin, authLoginSuccess),
        tap(() =>
          this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true })
        )
      ),
    { dispatch: false }
  );

  /**
   * Set isAuthenticated to false on failed login or successful logout
   */
  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogout, authLoginFailure),
        tap(() => {
          this.router.navigate(['']);
          this.localStorageService.setItem(AUTH_KEY, {
            isAuthenticated: false
          });
        })
      ),
    { dispatch: false }
  );
}
