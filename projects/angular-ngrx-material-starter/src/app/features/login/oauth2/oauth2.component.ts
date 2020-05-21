import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ACCESS_TOKEN } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  authLogin,
  authLoginSuccess,
  authLoginFailure
} from '../../../core/auth/auth.actions';
import { AuthState, State } from '../../../core/auth/auth.models';
import { selectAuth } from '../../../core/auth/auth.selectors';

@Component({
  selector: 'ngrxtmp-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.scss']
})
export class Oauth2Component implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<State>) { }

  token: string;
  error: string;

  ngOnInit(): void {
    localStorage.setItem('oauthcomp', 'oauth');
    this.route.queryParams.subscribe(queryParams => {
      const token = queryParams['token'];
      const error = queryParams['error'];
      if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        this.store.dispatch(authLogin({username: 'username', password: 'password'}));
        this.router.navigateByUrl('profile'); 
      } else {
        //this.router.navigateByUrl('login');
        console.log(error); 
      }
    });
  }

}
