import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseData } from './responsedata.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public viewGitdate() {
    return this.http.get<ResponseData>('https://api.github.com/repos/mmuzio/gitdatetest/contents/gitdate.json?ref=master');
  }

  constructor(private http: HttpClient) {}

}