import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { Oauth2Component } from './oauth2/oauth2.component';

@NgModule({
  declarations: [LoginComponent, Oauth2Component],
  imports: [CommonModule, SharedModule, LoginRoutingModule]
})
export class LoginModule {}
