import { Injectable } from '@angular/core';
import { environment, ACCESS_TOKEN } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HeadersService } from '../headers/headers.service';
import { DisplayMatch } from '../models/displaymatch.model';

@Injectable({
    providedIn: 'root'
  })
  export class MatchesService {
  
    private readonly URL = environment.apiBaseURL + `/match`;
  
    matchList: User[];
  
    public listMatches(): Observable<DisplayMatch[]> {

        const headers = this.headersService.getHeaders();

        return this.http.get<DisplayMatch[]>(this.URL + '/user', { headers });
    }
  
    constructor(private http: HttpClient, private headersService: HeadersService) {}
  }