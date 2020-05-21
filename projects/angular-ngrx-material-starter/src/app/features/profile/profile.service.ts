import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../models/responsedata.model';
import { API_BASE_URL, ACCESS_TOKEN } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public getUser(username: string) {
    return this.http.get<ResponseData>('https://api.github.com/repos/' + username + '/gitdatetest/contents/gitdate.json?ref=master');
  }

  public getCurrentUser() {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    if (localStorage.getItem(ACCESS_TOKEN)) {
      console.log(localStorage.getItem(ACCESS_TOKEN));
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
      console.log(headers);
    }

    return this.http.get<User>(API_BASE_URL + '/user/me', { headers });

}

  constructor(private http: HttpClient) {}

}