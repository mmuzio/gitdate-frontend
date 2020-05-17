import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConnectService } from '../connect.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ResponseData } from '../../profile/responsedata.model';
import { Profile } from '../../profile/profile.model';

@Component({
  selector: 'ngrxtmp-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectComponent implements OnInit {

  constructor(private connectService: ConnectService,
    private route: ActivatedRoute, private router: Router) { }

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  responseData: ResponseData;

  profileData: Profile;

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.connectService.viewProfile().subscribe(username => {
      console.log(username);
      this.connectService.getProfile(username).subscribe(response => {
        this.responseData = response;
        this.profileData = JSON.parse(atob(response.content));
      });
    });
  }

  acceptProfile() {
    this.connectService.acceptProfile(this.profileData.name).subscribe(username => {
      console.log(username);
    });
    this.getProfile();
  }

  rejectProfile() {
    this.connectService.rejectProfile(this.profileData.name).subscribe(username => {
      console.log(username);
    });
    this.getProfile();
  }

}
