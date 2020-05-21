import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from '../connect.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ResponseData } from '../../models/responsedata.model';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'ngrxtmp-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(private connectService: ConnectService,
    private route: ActivatedRoute, private router: Router) { }

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  profileData: Profile;

  imageData: ResponseData[];

  username: string;

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.connectService.getUser().subscribe(username => {
      this.username = username;
      this.connectService.getUserProfile(username).subscribe(response => {
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
      
    });
  };

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

  acceptUser() {
    this.connectService.acceptUser(this.username).subscribe(username => {
      this.getUserProfile();
    });
  }

  rejectUser() {
    this.connectService.rejectUser(this.username).subscribe(username => {
      this.getUserProfile();
    });

  }

}
