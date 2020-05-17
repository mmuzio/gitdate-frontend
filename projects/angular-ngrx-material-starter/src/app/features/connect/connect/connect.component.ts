import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from '../connect.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ResponseData } from '../../profile/responsedata.model';
import { Profile } from '../../profile/profile.model';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngrxtmp-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(private connectService: ConnectService,
    private route: ActivatedRoute, private router: Router) { }

  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  responseData: ResponseData;

  profileData: Profile;

  imageData: ResponseData[];

  ngOnInit() {
    this.getUserProfile();
    this.getProfileImages();
  }

  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  getUserProfile() {
    this.connectService.getUser().subscribe(username => {
      console.log('getUser username: ' + username);
      this.connectService.getUserProfile(username).subscribe(response => {
        console.log('getUserProfile response received');
        this.responseData = response;
        this.profileData = JSON.parse(atob(response.content));
        console.log('profile name is ' + this.profileData.name);
      });
    });
  }

  getProfileImages() {
    this.connectService.getProfileImages('mmuzio').subscribe(response => {
      this.imageData = response;
    });
  }

  acceptUser() {
    this.connectService.acceptUser(this.profileData.name).subscribe(username => {
      console.log('accept user response: ' + username);
      this.getUserProfile();
    });
  }

  rejectUser() {
    this.connectService.rejectUser(this.profileData.name).subscribe(username => {
      console.log('accept user response: ' + username);
      this.getUserProfile();
    });

  }

}
