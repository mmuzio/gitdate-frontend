import { Injectable, Injector, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Passes HttpErrorResponse to application-wide error handler
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  /**
   * Injects necessary services
   * @param injector The Angular injector
   */
  constructor(private injector: Injector) {}

  /**
   * intercepts the HTTP request and returns an error handler
   * @param request The incoming request
   * @param next Intercepts and transforms/handles the request
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            const appErrorHandler = this.injector.get(ErrorHandler);
            appErrorHandler.handleError(err);
          }
        }
      })
    );
  }
}
