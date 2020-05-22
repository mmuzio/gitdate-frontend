import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
import { MatchesService } from '../matches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { DisplayMatch } from '../../models/displaymatch.model';

@Component({
  selector: 'ngrxtmp-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  // an attribute that can be applied to DOM elements to
  // make them animate when added to the DOM
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  // the list of matches as an array of DisplayMatches
  matchesList: DisplayMatch[];

  constructor(private matchesService: MatchesService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.matchesService.listMatches().subscribe(matchesList => {
      this.matchesList  = matchesList
      console.log(this.matchesList);
    });
  }

  /**
   * 
   * @param username the username of the matched user
   */
  viewMatch(username: string){
    this.router.navigate(['match', username]);
  }

  /**
   * viewChat navigates to the chat component which displays
   * the chat between the current user and the matched user
   * @param match_id the id of the match
   */
  viewChat(match_id: number){
    this.router.navigate(['chat', match_id]);
  }

}
