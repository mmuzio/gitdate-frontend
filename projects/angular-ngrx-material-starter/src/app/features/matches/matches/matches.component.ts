import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
import { MatchesService } from '../matches.service';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { DisplayMatch } from '../../models/displaymatch.model';

/**
 * MatchesComponent displays the authenticated user's matches
 */
@Component({
  selector: 'ngrxtmp-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  /**
   * An attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  /**
   * the list of matches as an array of DisplayMatches
   */
  matchesList: DisplayMatch[];

  /**
   * Inject the necessary services
   * @param matchesService Gets the authenticated user's matches
   * @param route 
   * @param router 
   */
  constructor(private matchesService: MatchesService,
              private router: Router) { }

  /**
   * Get the list of matches on initial component load
   */
  ngOnInit() {
    this.matchesService.listMatches().subscribe(matchesList => {
      this.matchesList  = matchesList
      console.log(this.matchesList);
    });
  }

  /**
   * viewMatch navigates to the matched user's profile page
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
