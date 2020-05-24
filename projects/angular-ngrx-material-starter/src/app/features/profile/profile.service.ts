import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../models/responsedata.model';
import { API_BASE_URL, ACCESS_TOKEN } from '../../../environments/environment';
import { User } from '../models/user.model';
import { HeadersService } from '../headers/headers.service';

/**
 * ProfileService makes calls to GitHub API to 
 * populate the user's profile data.
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  /**
   * Get the user's profile from gitdate.json
   * @param username the authenticated user's username
   */
  public getUser(username: string) {
    return this.http.get<ResponseData>('https://api.github.com/repos/' + username + '/gitdatetest/contents/gitdate.json?ref=master');
  }

  /**
   * Get the authenticated user's details from GitDate API
   */
  public getCurrentUser() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user/me', { headers });

  }

  /**
   * Get the authenticated user's profile from gitdate.json
   * TO-DO: Get this working
   */
  public getCurrentUserGithub() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user', { headers });

  }

  /**
   * Inject necessary services
   * @param http The HTTP Client
   * @param headersService Adds necessary headers, including JWT
   */
  constructor(private http: HttpClient, private headersService: HeadersService) {}

}