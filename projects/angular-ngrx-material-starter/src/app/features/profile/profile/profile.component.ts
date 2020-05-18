import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ResponseData } from '../../models/responsedata.model';
import { ProfileService } from '../profile.service';
import { ConnectService } from '../../connect/connect.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

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

  responseData: ResponseData;

  profileData: Profile; 

  imageData: ResponseData[];

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    const username = localStorage.getItem('username');
    this.profileService.getUser(username).subscribe(response => {
      this.responseData = response;
      this.profileData = JSON.parse(atob(response.content));
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
