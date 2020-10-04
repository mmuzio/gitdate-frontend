import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * BigInputComponent
 */
@Component({
  selector: 'ngrxtmp-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputComponent {
  /**
   * The element placeholder
   */
  @Input()
  placeholder: string;

  /**
   * The element value
   */
  @Input()
  value = '';

  /**
   * The element is disabled?
   */
  @Input()
  disabled = false;

  /**
   * The element has focus?
   */
  hasFocus = false;
}
