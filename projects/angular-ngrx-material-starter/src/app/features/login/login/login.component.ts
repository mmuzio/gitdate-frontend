import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import {
  authLogin,
  authLoginSuccess,
  authLoginFailure
} from '../../../core/auth/auth.actions';
import { AuthState, State } from '../../../core/auth/auth.models';
import { selectAuth } from '../../../core/auth/auth.selectors';
import { LoginService } from '../login.service';
import { RegisterUser } from '../../models/registerUser.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngrxtmp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  auth$: Observable<AuthState>;
  
  constructor(private store: Store<State>, private loginService: LoginService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.auth$ = this.store.pipe(select(selectAuth));
  }

  onLogin(username: string, password: string) {
    this.store.dispatch(authLogin({username, password}));
    localStorage.setItem('username', username);
    this.router.navigateByUrl('/connect');
  }

  onRegister(username: string, password: string) {

    const newUser = new RegisterUser(
      username,
      password
    );

    this.loginService.addUser(newUser as RegisterUser)
     .subscribe(response => {
      this.router.navigate(['profile']);
    });
  }

}
