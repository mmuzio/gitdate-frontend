import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * NotificationService displays notifications to the user
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  /**
   * Inject necessary services
   * @param snackBar The snackBar notification service
   * @param zone The Angular ngZone service
   */
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  /**
   * Shows a notification with default style
   * @param message The message to display
   */
  default(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'default-notification-overlay'
    });
  }

  /**
   * Shows a notification with information style
   * @param message The message to display
   */
  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'info-notification-overlay'
    });
  }

  /**
   * Shows a notification with success style
   * @param message The message to display
   */
  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'success-notification-overlay'
    });
  }

  /**
   * Shows a notification with warn style
   * @param message The message to display
   */
  warn(message: string) {
    this.show(message, {
      duration: 2500,
      panelClass: 'warning-notification-overlay'
    });
  }

  /**
   * Shows a notification with error style
   * @param message The message to display
   */
  error(message: string) {
    this.show(message, {
      duration: 3000,
      panelClass: 'error-notification-overlay'
    });
  }

  /**
   * Shows a notification with a specififed configuration
   * @param message The message to be displayed
   * @param configuration The snackbar notification configuration 
   */
  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
