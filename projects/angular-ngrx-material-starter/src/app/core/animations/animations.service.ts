import { Injectable } from '@angular/core';

/**
 * AnimationsService updates animation settings
 */
@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() {
    AnimationsService.routeAnimationType = 'NONE';
  }

  private static routeAnimationType: RouteAnimationType = 'NONE';

  static isRouteAnimationsType(type: RouteAnimationType) {
    return AnimationsService.routeAnimationType === type;
  }

  /**
   * updateRouteAnimationType updates routeAnimationType
   * @param pageAnimations Are page animations on?
   * @param elementsAnimations Are element animations on?
   */
  updateRouteAnimationType(
    pageAnimations: boolean,
    elementsAnimations: boolean
  ) {
    AnimationsService.routeAnimationType =
      pageAnimations && elementsAnimations
        ? 'ALL'
        : pageAnimations
        ? 'PAGE'
        : elementsAnimations
        ? 'ELEMENTS'
        : 'NONE';
  }
}

/**
 * The route animation types
 */
export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';
