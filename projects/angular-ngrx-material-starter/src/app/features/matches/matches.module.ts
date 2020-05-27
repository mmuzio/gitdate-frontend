import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches/matches.component';

@NgModule({
  declarations: [MatchesComponent],
  imports: [CommonModule, SharedModule, MatchesRoutingModule]
})
export class MatchesModule {}