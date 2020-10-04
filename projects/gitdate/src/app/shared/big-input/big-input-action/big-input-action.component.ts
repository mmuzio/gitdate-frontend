import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

/**
 * BigInputActionComponent
 */
@Component({
  selector: 'ngrxtmp-big-input-action',
  templateUrl: './big-input-action.component.html',
  styleUrls: ['./big-input-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputActionComponent {
  /**
   * The element is disabled?
   */
  @Input()
  disabled = false;

  /**
   * The font set
   */
  @Input()
  fontSet = '';

  /**
   * The icon
   */
  @Input()
  fontIcon = '';

  /**
   * The icon
   */
  @Input()
  faIcon = '';

  /**
   * The element label
   */
  @Input()
  label = '';

  /**
   * The element color
   */
  @Input()
  color = '';

  /**
   * The action to be emitted
   */
  @Output()
  action = new EventEmitter<void>();

  /**
   * The element has focus?
   */
  hasFocus = false;

  /**
   * Emits an action
   */
  onClick() {
    this.action.emit();
  }
}
