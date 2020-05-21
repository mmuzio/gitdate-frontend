import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ResponseData } from '../../models/responsedata.model';
import { ProfileService } from '../profile.service';
import { ConnectService } from '../../connect/connect.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { User } from '../../models/user.model';

@Component({
  selector: 'ngrxtmp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService,
              private connectService: ConnectService,
              private route: ActivatedRoute,
              private router: Router) { }

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  profileData: Profile; 

  imageData: ResponseData[];

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.profileService.getCurrentUser().subscribe(user => {
      this.getUserProfile(user.username);
    })
  }

  getUserProfile(username: string) {
    this.profileService.getUser(username).subscribe(response => {
      this.profileData = JSON.parse(atob(response.content));
      const length = this.profileData.repos.length;
      for (let i = 0; i < length; i++) {
        this.connectService.getRepositoryLanguages(username, this.profileData.repos[i].url)
          .subscribe(response => {
            const languages = Object.keys(response);
            this.profileData.repos[i] = {
              ...this.profileData.repos[i],
              languages: languages
            };
        });
      };
    });
    this.getProfileImages(username);
  }

  getProfileImages(username: string) {
    this.connectService.getProfileImages(username).subscribe(response => {
      this.imageData = this.clean(response);
    }, err => {
      this.imageData = [new ResponseData('Images Not Found', null, null, null, null, null , null, 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg', null, null, null, null)];
    });
  }

  clean(response: ResponseData[]): ResponseData[] {
    return response.filter((elem) => elem.name !== '.DS_Store');
  }

}
