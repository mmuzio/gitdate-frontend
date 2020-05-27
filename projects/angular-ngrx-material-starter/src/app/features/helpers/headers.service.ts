import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ACCESS_TOKEN } from '../../../environments/environment';

/**
 * HeadersServices adds necessary headers to HTTP requests
 */
@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  /**
   * getHeaders returns HttpHeaders needed to make authenticated requests to GitDate API
   */
  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
    }
    return headers;
  }

  /**
   * Inject necessary services
   */
  constructor() {}

}