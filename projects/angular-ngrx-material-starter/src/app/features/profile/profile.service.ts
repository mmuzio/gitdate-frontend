import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../models/responsedata.model';
import { API_BASE_URL, ACCESS_TOKEN } from '../../../environments/environment';
import { User } from '../models/user.model';
import { HeadersService } from '../headers/headers.service';

/**
 * ProfileService 
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public getUser(username: string) {
    return this.http.get<ResponseData>('https://api.github.com/repos/' + username + '/gitdatetest/contents/gitdate.json?ref=master');
  }

  public getCurrentUser() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user/me', { headers });

  }

  public getCurrentUserGithub() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user', { headers });

  }

  constructor(private http: HttpClient, private headersService: HeadersService) {}

}