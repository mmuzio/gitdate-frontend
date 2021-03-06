import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ResponseData } from '../../models/responsedata.model';
import { ProfileService } from '../profile.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { CleanerService } from '../../helpers/cleaner.service';

/**
 * ProfileComponent displays the authenticated user's profile
 */
@Component({
  selector: 'ngrxtmp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
   * an attribute that can be applied to DOM elements to
   * make them animate when added to the DOM
   */
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  /**
   * Inject necessary services
   */
  constructor(
    private profileService: ProfileService,
    private cleanerService: CleanerService
  ) {}

  /**
   * Get the user's profile on initial component load
   */
  ngOnInit() {
    this.getCurrentUser();
  }

  /**
   * getCurrentUser gets the authenticated user
   * and extracts username to get their profile
   */
  getCurrentUser() {
    this.profileService.getCurrentUser().subscribe(user => {
      this.getUserProfile(user.username);
      localStorage.setItem('username', user.username);
    });
  }

  /**
   * getUserProfile get's the current user's profile information
   * including profiledata from gitdate.json, languages from each
   * repo in gitdate.json, and profile images in assets/images
   * @param username the current user's username
   */
  getUserProfile(username: string) {
    this.profileService.getUserProfile(username).subscribe(profileresp => {
      this.profileData = JSON.parse(atob(profileresp.content));
      // Get Repository Languages for the current user
      this.getRepositoryLanguages(username);
      // Get profile images for the current user
      this.getProfileImages(username);
    });
  }

  /**
   * getRepositoryLanguages gets languages for each repo in gitdate profile
   * @param username the current user's username
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
        // if no images are received, provide fallback profile image
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
