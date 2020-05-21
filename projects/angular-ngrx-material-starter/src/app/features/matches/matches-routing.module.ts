import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../core/core.module';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent,
    canActivate: [AuthGuardService],
    data: { title: 'ngrxtmp.menu.profile' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule {}