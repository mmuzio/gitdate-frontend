import { Injectable } from '@angular/core';
import { RegisterUser } from './registerUser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  // URL to register endpoint
  private readonly URL = 'http://localhost:8080/register'; 

  // specify json as content type
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // use RegisterUser model
  // same as user but without userId
  // userId is autoincremented in database
  user: RegisterUser;

  /**
   * addUser registers the user
   * @param user the user to be registered
   */
  public addUser(user: RegisterUser) {
    console.log(user);
    return this.http.post(this.URL, user);
  }

}