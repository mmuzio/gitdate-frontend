import { Injectable } from '@angular/core';

/**
 * AnimationsService updates animation settings
 */
@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  /**
   * Set routeAnimationType to NONE
   */
  constructor() {
    AnimationsService.routeAnimationType = 'NONE';
  }

  /**
   * The route animation type, default to NONE
   */
  private static routeAnimationType: RouteAnimationType = 'NONE';

  /**
   * Is the current animation type the same as the input?
   * @param type The route animation type
   */
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
