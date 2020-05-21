import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Oauth2Component } from './features/login/oauth2/oauth2.component';
import { MatchComponent } from './features/matches/match/match.component';
import { ChatComponent } from './features/matches/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'oauth2/redirect',
    component: Oauth2Component
  },
  {
    path: 'match/:id',
    component: MatchComponent
  },
  {
    path: 'chat/:id',
    component: ChatComponent
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'connect',
    loadChildren: () =>
      import('./features/connect/connect.module').then(m => m.ConnectModule)
  },
  {
    path: 'matches',
    loadChildren: () =>
      import('./features/matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
