import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Profile } from '../profile.model';
import { ResponseData } from '../responsedata.model';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'ngrxtmp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute, private router: Router) { }

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  responseData: ResponseData;

  profileData: Profile; // = new Profile('', [], [], [{name: '', description: '', url: ''}]);

  ngOnInit() {
    this.getGitdate();
  }

  getGitdate() {
    this.profileService.viewGitdate().subscribe(response => {
    this.responseData = response;
    this.profileData = JSON.parse(atob(response.content));
    });
  }

}
