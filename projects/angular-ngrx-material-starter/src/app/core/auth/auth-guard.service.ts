import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { selectIsAuthenticated } from './auth.selectors';
import { AppState } from '../core.state';

/**
 * AuthGuardService implements CanActivate, and provides the 
 * canActivate function which checks the NGRX store to see if the 
 * user is authenticated
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  /**
   * isLoggedIn is true if the user is logged in
   */
  isLoggedIn: boolean;

  /**
   * Inject necessary services
   * @param store The NGRX store
   * @param router The Angular router
   */
  constructor(private store: Store<AppState>, 
              private router: Router) {}

  /**
   * canActivate subscribes to the store selector 'selectIsAuthenticated', 
   * returns the result, and navigates back to the login page if false
   */
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const result = this.store.pipe(select(selectIsAuthenticated));
    result.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
          } 
      });
    return result;
  }
}
