import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { ProfileService } from '../../profile/profile.service';
import { ConnectService } from '../connect.service';
import { CleanerService } from '../../helpers/cleaner.service';

import { ResponseData } from '../../models/responsedata.model';
import { Profile } from '../../models/profile.model';

/**
 * ConnectComponent displays the user's profile and provides
 * actions to like or dislike the user
 */
@Component({
  selector: 'ngrxtmp-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  /**
   * the currently displayed user's image data
   */
  imageData: ResponseData[];

  /**
   * the currently displayed user's profile data
   */
  profileData: Profile;

  /**
   * An attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  /**
   * the currently displayed user's username
   */
  username: string;

  /**
   * Inject necessary services
   */
  constructor(
    private connectService: ConnectService,
    private profileService: ProfileService,
    private cleanerService: CleanerService
  ) {}

  /**
   * Get a user's profile on initial component load
   */
  ngOnInit() {
    this.getRandomUserProfile();
  }

  /**
   * getUserProfile get's the user's profile information
   * including profiledata from gitdate.json, languages from each
   * repo in gitdate.json, and profile images in assets/images
   */
  getRandomUserProfile() {
    this.connectService.getRandomUser().subscribe(username => {
      this.username = username;
      this.profileService.getUserProfile(username).subscribe(response => {
        this.profileData = JSON.parse(atob(response.content));
        this.getRepositoryLanguages(username);
        this.getProfileImages(username);
      });
    });
  }

  /**
   * getRepositoryLanguages gets languages for each repo in gitdate profile
   * @param username the user's username
   */
  getRepositoryLanguages(username: string) {
    const length = this.profileData.repos.length;
    for (let i = 0; i < length; i++) {
      this.profileService
        .getRepositoryLanguages(username, this.profileData.repos[i].url)
        .subscribe(languageresp => {
          const languages = Object.keys(languageresp);
          this.profileData.repos[i] = {
            ...this.profileData.repos[i],
            languages: languages
          };
        });
    }
  }

  /**
   * getProfileImages gets the current user's profile images
   * from the assets/images directory in the user's gitdate repo
   * the response is an array of type responsedata, where each element
   * represents a file in the assets/images directory.
   * @param username the current user's username
   */
  getProfileImages(username: string) {
    this.profileService.getProfileImages(username).subscribe(
      response => {
        this.imageData = this.cleanerService.clean(response);
      },
      err => {
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

  /**
   * starRepository stars the user's repository by the authenticated user
   * @param repo the repository to star
   */
  starRepository(repo: string) {
    this.profileService.starRepository(this.username, repo).subscribe();
  }

  /**
   * acceptUser likes the user by the authenticated user
   */
  acceptUser() {
    this.connectService.acceptUser(this.username).subscribe(username => {
      this.getRandomUserProfile();
    });
  }

  /**
   * rejectUser dislikes the user by the authenticated user
   */
  rejectUser() {
    this.connectService.rejectUser(this.username).subscribe(username => {
      this.getRandomUserProfile();
    });
  }
}
