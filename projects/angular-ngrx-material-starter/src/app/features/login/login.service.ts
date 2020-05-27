import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { API_BASE_URL } from '../../../environments/environment';
import { HeadersService } from '../helpers/headers.service';

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
   * URL to user endpoint
   */
  private readonly URL = API_BASE_URL + '/user/me'; 

  /**
   * Inject necessary services
   */
  constructor(private http: HttpClient,
              private headersService: HeadersService) {}

  /**
   * getCurrentUser gets the authenticated user
   */
  public getCurrentUser() {

    const headers = this.headersService.getHeaders();

    return this.http.get<User>(this.URL, { headers });

  }

}