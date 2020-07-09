import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { createEffect } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';

/**
 * Side effects for Google Analytics Actions
 */
@Injectable()
export class GoogleAnalyticsEffects {

  /**
   * Inject necessary services
   * @param router The Angular router
   */
  constructor(private router: Router) {}

  /**
   * Send a Google Analytics pageview on navigation end event
   */
  pageView = createEffect(
    () => () =>
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        })
      ),
    { dispatch: false }
  );
}
