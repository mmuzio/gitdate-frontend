import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../profile/responsedata.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public viewProfile() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get('http://localhost:8080/connect', { headers, responseType: 'text'});
  }

  public getProfile(username: any): Observable<ResponseData> {
    return this.http.get<ResponseData>('https://api.github.com/repos/' + username + '/gitdatetest/contents/gitdate.json?ref=master');
  }

  public acceptProfile(username: string) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get('http://localhost:8080/accept/' + username, { headers, responseType: 'text'});
  }

  public rejectProfile(username: string) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get('http://localhost:8080/reject/' + username, { headers, responseType: 'text'});
  }

  constructor(private http: HttpClient) {}

}