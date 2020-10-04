import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence
} from '@angular/animations';
import { AnimationsService } from './animations.service';

/**
 * The route animations elements
 */
export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

/**
 * Configure animation steps
 */
const STEPS_ALL: any[] = [
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true
  }),
  query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
    optional: true
  }),
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(-3%)', opacity: 0 })
        ),
        style({ position: 'fixed' })
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          transform: 'translateY(-3%)',
          opacity: 0,
          position: 'static'
        }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ],
      { optional: true }
    )
  ]),
  query(
    ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
    stagger(75, [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate(
        '0.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      )
    ]),
    { optional: true }
  )
];

/**
 * No animations
 */
const STEPS_NONE = [];

/**
 * Configure page animations
 */
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];

/**
 * Configure element animations
 */
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];

/**
 * Trigger route animations
 */
export const routeAnimations = trigger('routeAnimations', [
  transition(isRouteAnimationsAll, STEPS_ALL),
  transition(isRouteAnimationsNone, STEPS_NONE),
  transition(isRouteAnimationsPage, STEPS_PAGE),
  transition(isRouteAnimationsElements, STEPS_ELEMENTS)
]);

/**
 * Select all animations
 */
export function isRouteAnimationsAll() {
  return AnimationsService.isRouteAnimationsType('ALL');
}

/**
 * Select no animations
 */
export function isRouteAnimationsNone() {
  return AnimationsService.isRouteAnimationsType('NONE');
}

/**
 * Select page animations
 */
export function isRouteAnimationsPage() {
  return AnimationsService.isRouteAnimationsType('PAGE');
}

/**
 * Select element animations
 */
export function isRouteAnimationsElements() {
  return AnimationsService.isRouteAnimationsType('ELEMENTS');
}
