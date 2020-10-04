import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

/**
 * CustomSerializer serializes a snapshot of the router state to be consumed by
 * RouterStateUrl slice of NGRX state
 */
@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  /**
   * serialize takes the current router state snapshot and returns state of
   * type RouterStateUrl
   * @param routerState A snapshot of the router state
   */
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
