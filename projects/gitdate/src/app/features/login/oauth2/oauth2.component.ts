import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  authLoginSuccess,
  authLoginFailure
} from '../../../core/auth/auth.actions';
import { State } from '../../../core/auth/auth.models';

import { ACCESS_TOKEN } from '../../../../environments/environment';

import { LoginService } from '../login.service';

/**
 * Oauth2Component is the component that gets loaded on Oauth2 callback.
 * The URL will contain either a token or an error as a query parameter.
 * This component handles successful (token) or unsuccessful (error)
 * authentication attempts.
 */
@Component({
  selector: 'ngrxtmp-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.scss']
})
export class Oauth2Component implements OnInit {
  /**
   * The Oauth2 token
   */
  token: string;

  /**
   * The error, if authentication does not succeed
   */
  error: string;

  /**
   * Inject necessary services
   * @param router The Angular router
   * @param route The Angular activated route
   * @param loginService The login service
   * @param store The NGRX store
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private store: Store<State>
  ) {}

  /**
   * Extract token (or error) from query parameters.
   * Then navigate to profile page if authentication is successful
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      // Extract token, if it exists
      const token = queryParams['token'];
      // Extract error, if it exists
      const error = queryParams['error'];
      // If there is a token, authentication is successful
      if (token) {
        // Set token in local storage, for later requests
        localStorage.setItem(ACCESS_TOKEN, token);
        // Call login service to get current user
        this.loginService.getCurrentUser().subscribe(user => {
          // Dispatch login success action
          this.store.dispatch(authLoginSuccess());
          // Navigate to profile component on successful authentication
          this.router.navigateByUrl('profile');
        });
      } else {
        // Dispatch login failure action
        this.store.dispatch(authLoginFailure());
        // If no token, we have an error
        console.log(error);
      }
    });
  }
}
