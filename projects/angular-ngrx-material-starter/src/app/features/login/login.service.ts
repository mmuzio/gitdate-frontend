import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/registerUser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { API_BASE_URL } from '../../../environments/environment';
import { HeadersService } from '../headers/headers.service';

/**
 * LoginService is used to register the user and get the current user. 
 * Register may be deprecated. Get current user may be refactored to a 
 * user controller
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
   * Inject necessary services
   */
  constructor(private http: HttpClient,
              private headersService: HeadersService) {}

  /**
   * URL to register endpoint
   */
  private readonly URL = 'http://localhost:8080/register'; 

  /**
   * Specify JSON as content type in http headers
   */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
   * RegisterUser model contains username and password
   */
  user: RegisterUser;

  /**
   * addUser registers the user
   * @param user the user to be registered
   */
  public addUser(user: RegisterUser) {
    console.log(user);
    return this.http.post(this.URL, user);
  }

  /**
   * getCurrentUser gets the authenticated user
   */
  public getCurrentUser() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(API_BASE_URL + '/user/me', { headers });

  }

}