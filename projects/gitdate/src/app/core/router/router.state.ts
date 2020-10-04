import { Params } from '@angular/router';

/**
 * The router state
 */
export interface RouterStateUrl {
  /**
   * The current route URL
   */
  url: string;

  /**
   * The route parameters
   */
  params: Params;

  /**
   * The route query parameters
   */
  queryParams: Params;
}
