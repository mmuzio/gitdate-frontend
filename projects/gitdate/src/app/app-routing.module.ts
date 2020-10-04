import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule)
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
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'connect',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/connect/connect.module').then(m => m.ConnectModule)
  },
  {
    path: 'matches',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: 'gittit',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/gittit/gittit.module').then(m => m.GittitModule)
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
