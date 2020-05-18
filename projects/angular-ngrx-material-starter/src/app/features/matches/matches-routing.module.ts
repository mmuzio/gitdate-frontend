import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../core/core.module';
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './match/match.component';
const routes: Routes = [
  {
    path: '',
    component: MatchesComponent,
    canActivate: [AuthGuardService],
    data: { title: 'ngrxtmp.menu.profile' }
  },
  {
    path: '',
    component: MatchComponent,
    canActivate: [AuthGuardService],
    data: { title: 'ngrxtmp.menu.profile' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule {}