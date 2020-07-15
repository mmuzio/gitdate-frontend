import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './match/match.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MatchesComponent,
        data: { title: 'ngrxtmp.matches.title' }
      },
      {
        path: 'profile/:id',
        component: MatchComponent,
        data: { title: 'ngrxtmp.matches.profile' }
      },
      {
        path: 'chat/:id',
        component: ChatComponent,
        data: { title: 'ngrxtmp.matches.chat' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule {}
