import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Oauth2Component } from './oauth2/oauth2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
        data: { title: 'ngrxtmp.menu.login' }
      },
      {
        path: 'oauth2/redirect',
        component: Oauth2Component,
        data: { title: 'ngrxtmp.menu.login' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
