import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

/**
 * AboutComponent displays the about page
 */
@Component({
  selector: 'ngrxtmp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  /**
   * an attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}
