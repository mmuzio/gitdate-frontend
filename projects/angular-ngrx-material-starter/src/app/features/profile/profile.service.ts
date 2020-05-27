import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../models/responsedata.model';
import { API_BASE_URL, ACCESS_TOKEN } from '../../../environments/environment';
import { User } from '../models/user.model';
import { HeadersService } from '../helpers/headers.service';

/**
 * ProfileService makes calls to GitHub API to 
 * populate the user's profile data.
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  /**
   * Inject necessary services
   * @param http The HTTP Client
   * @param headersService Adds necessary headers, including JWT
   */
  constructor(private http: HttpClient, 
              private headersService: HeadersService) {}

  /**
   * Get the authenticated user's details from GitDate API
   */
  public getCurrentUser() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user/me', { headers });

  }

  /**
   * Get the user's profile from gitdate.json
   * @param username the authenticated user's username
   */
  public getUserProfile(username: string): Observable<ResponseData> {
    return this.http.get<ResponseData>('https://api.github.com/repos/' + username + '/gitdatetest/contents/gitdate.json?ref=master');
  }

  /**
   * getRepositoryLanguages calls the Github Repo API to get the programming languages
   * associated with a particular repo
   * @param username the user's github username
   * @param repo the name of the user's github repo 
   */
  public getRepositoryLanguages(username: string, repo: string): Observable<any> {
    return this.http.get<any>('https://api.github.com/repos/' + username + '/' + repo + '/languages');
  }

  /**
   * getProfileImages calls the Github Repo API to get the contents of the assets/images directory
   * The assets/images directory contains the user's profile images
   * @param username the user's github username
   */
  public getProfileImages(username: any): Observable<ResponseData[]> {
    return this.http.get<ResponseData[]>('https://api.github.com/repos/' + username + '/gitdatetest/contents/assets/images');
  }

  /**
   * starRepository stars a repository for the authenticated user 
   * TO-DO: Get this working
   * @param username the user's github username
   * @param repo the name of the user's github repo
   */
  public starRepository(username: string, repo: string) {
    let headers = this.headersService.getHeaders();
    headers = headers.append('Content-Length', '0');
    return this.http.put('https://api.github.com/user/starred/' + username + '/' + repo, null, { headers } );
  }

  /**
   * Get the authenticated user's profile from gitdate.json
   * TO-DO: Get this working
   */
  public getCurrentUserGithub() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user', { headers });

  }

}