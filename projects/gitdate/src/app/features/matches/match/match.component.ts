import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { ProfileService } from '../../profile/profile.service';
import { CleanerService } from '../../helpers/cleaner.service';

import { Profile } from '../../models/profile.model';
import { ResponseData } from '../../models/responsedata.model';

/**
 * The MatchComponent displays the matched user's profile
 */
@Component({
  selector: 'ngrxtmp-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  /**
   * An array of elements that contain information about
   * each profile image
   */
  imageData: ResponseData[];

  /**
   * Contains the current user's profile information
   */
  profileData: Profile;

  /**
   * An attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  /**
   * The matched user's username
   */
  username: string;

  /**
   * Inject necessary services
   * @param profileService the profile service
   * @param route the activated route service
   */
  constructor(
    private profileService: ProfileService,
    private cleanerService: CleanerService,
    private route: ActivatedRoute
  ) {}

  /**
   * Get the matched user's username from the route snapshot,
   * then get the matched user's profile information
   */
  ngOnInit() {
    this.username = this.route.snapshot.params['id'];
    this.getUserProfile(this.username);
  }

  /**
   * getUserProfile get's the current user's profile information
   * including profiledata from gitdate.json, languages from each
   * repo in gitdate.json, and profile images in assets/images
   * @param username The current user's username
   */
  getUserProfile(username: string) {
    // Get the matched user's profile information
    this.profileService.getUserProfile(username).subscribe(profileresp => {
      // Parse the response
      this.profileData = JSON.parse(atob(profileresp.content));
      // For each repository in the response, get programming languages
      this.getRepositoryLanguages(username);
      // Get profile images for the current user
      this.getProfileImages(username);
    });
  }

  /**
   * getRepositoryLanguages gets languages for each repo in gitdate profile
   * @param username the user's username
   */
  getRepositoryLanguages(username: string) {
    // Total number of repos
    const length = this.profileData.repos.length;
    // Add languages to each repo
    for (let i = 0; i < length; i++) {
      this.profileService
        .getRepositoryLanguages(username, this.profileData.repos[i].url)
        .subscribe(languageresp => {
          // Response contains languages as keys, LOC as values
          const languages = Object.keys(languageresp);
          // Add languages to repo object
          this.profileData.repos[i] = {
            ...this.profileData.repos[i],
            languages: languages
          };
        });
    }
  }

  /**
   * getProfileImages gets the current user's profile images
   * from the assets/images directory in the user's gitdate repo.
   * The response is an array of type responsedata, where each element
   * represents a file in the assets/images directory.
   * @param username The current user's username
   */
  getProfileImages(username: string) {
    this.profileService.getProfileImages(username).subscribe(
      response => {
        // Remove non-image files
        this.imageData = this.cleanerService.clean(response);
      },
      err => {
        // If no images are received, provide fallback profile image
        this.imageData = [
          new ResponseData(
            'Images Not Found',
            null,
            null,
            null,
            null,
            null,
            null,
            'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg',
            null,
            null,
            null,
            null
          )
        ];
      }
    );
  }
}
