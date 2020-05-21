import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ACCESS_TOKEN } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
    }
    return headers;
  }

  constructor() {}

}