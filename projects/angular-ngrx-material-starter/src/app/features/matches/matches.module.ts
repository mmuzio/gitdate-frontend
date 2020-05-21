import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches/matches.component';
//import { MatchComponent } from './match/match.component';
//import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [MatchesComponent],
  imports: [CommonModule, SharedModule, MatchesRoutingModule]
})
export class MatchesModule {}