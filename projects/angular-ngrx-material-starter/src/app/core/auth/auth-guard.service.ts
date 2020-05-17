import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { selectIsAuthenticated } from './auth.selectors';
import { AppState } from '../core.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  isLoggedIn: boolean;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const result = this.store.pipe(select(selectIsAuthenticated))
    result.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
          } 
      })
    return result; 
    // .subscribe(isLoggedIn => {
    //   if (!isLoggedIn) {
    //     this.router.navigateByUrl('/login');
    //     return of(false);
    //   } else {
    //     return of(true);
    //   }
    // }, err => {
    //   this.router.navigateByUrl('/login');
    //   return of(false);
    // });
  }
}
