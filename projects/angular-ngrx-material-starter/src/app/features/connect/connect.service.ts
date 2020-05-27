import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../models/responsedata.model';
import { ACCESS_TOKEN } from '../../../environments/environment';
import { constructor } from 'uuid';
import { HeadersService } from '../headers/headers.service';

/**
 * ConnectService handles calls to GitDate API to get potential connections 
 * and like or dislike their profile. It also makes calls to GitHub API to 
 * populate the user's profile data.
 */
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  /**
   * Inject necessary services
   * @param http The HTTP Client
   * @param headersService Used to add headers, including JWT
   */
  constructor(private http: HttpClient, private headersService: HeadersService) {}

  /**
   * getUser returns a random gitdate user's github username
   */
  public getRandomUser() {
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

}