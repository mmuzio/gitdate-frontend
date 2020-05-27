import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { AuthState, State } from '../../../core/auth/auth.models';
import { selectAuth } from '../../../core/auth/auth.selectors';

import { GITHUB_AUTH_URL } from '../../../../environments/environment';

/**
 * LoginComponent is mostly presentation. It contains router link buttons 
 * that give the user the option to sign in with GitHub or get more info
 */
@Component({
  selector: 'ngrxtmp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  /**
   * The current authentication status
   */
  auth$: Observable<AuthState>;

  /**
   * The URL for GitHub OAuth authentication
   */
  githubAuthURL = GITHUB_AUTH_URL;

  /**
   * The GitHub Logo
   */
  githubLogo = require('../../../../assets/github-logo.png').default;

  /**
   * An attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  
  /**
   * Inject necessary services
   * @param store The NGRX Store
   */
  constructor(private store: Store<State>) {}

  /**
   * Get the current authentication state
   */
  ngOnInit() {
    this.auth$ = this.store.pipe(select(selectAuth));
  }

}
