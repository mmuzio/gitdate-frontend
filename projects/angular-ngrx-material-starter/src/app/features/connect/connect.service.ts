import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../models/responsedata.model';
import { ACCESS_TOKEN } from '../../../environments/environment';
import { constructor } from 'uuid';
import { HeadersService } from '../headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  /**
   * getUser returns a random gitdate user's github username
   */
  public getUser() {
    const headers = this.headersService.getHeaders();
    return this.http.get('http://localhost:8080/connect', { headers, responseType: 'text'});
  }

    /**
   * acceptUser calls the GitDate API /accept endpoint to accept/like the user's profile
   * @param username the user's username
   */
  public acceptUser(username: string) {
    const headers = this.headersService.getHeaders();
    return this.http.post('http://localhost:8080/match', username, { headers, responseType: 'text'});
  }

  /**
   * rejectUser calls the GitDate API /reject endpoint to reject/dislike the user's profile
   * @param username the user's username
   */
  public rejectUser(username: string) {
    const headers = this.headersService.getHeaders();
    return this.http.delete('http://localhost:8080/match/' + username, { headers, responseType: 'text'});
  }

  /**
   * getUserProfile calls the Github Repo API to get the contents of the gitdate.json file
   * The gitdate.json file contains the user's profile data in json format
   * @param username the user's github username
   */
  public getUserProfile(username: any): Observable<ResponseData> {
    return this.http.get<ResponseData>('https://api.github.com/repos/' + username + '/gitdatetest/contents/gitdate.json?ref=master');
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
   * getRepositoryLanguages calls the Github Repo API to get the programming languages
   * associated with a particular repo
   * @param username the user's github username
   * @param repo the name of the user's github repo 
   */
  public getRepositoryLanguages(username: string, repo: string): Observable<any> {
    return this.http.get<any>('https://api.github.com/repos/' + username + '/' + repo + '/languages');
  }

  public starRepository(username: string, repo: string) {
    // let headers = this.headersService.getHeaders();
    // headers = headers.append('Content-Length', '0');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers = headers.append('Authorization', 'JWT ' + localStorage.getItem(ACCESS_TOKEN));
      headers = headers.append('Content-Length', '0');
    }
    return this.http.put('https://api.github.com/user/starred/' + username + '/' + repo, null, { headers } );
  }

  constructor(private http: HttpClient, private headersService: HeadersService) {}

}