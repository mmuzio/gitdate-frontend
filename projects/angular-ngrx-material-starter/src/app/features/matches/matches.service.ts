import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { HeadersService } from '../helpers/headers.service';

import { DisplayMatch } from '../models/displaymatch.model';

/**
 * MatchesService gets the list of matches for the authenticated user.
 */
@Injectable({
    providedIn: 'root'
  })
  export class MatchesService {

    /**
     * The URL for getting a list of matches
     */
    private readonly URL = environment.apiBaseURL + `/match`;

    /**
     * Inject the necessary services
     * @param http The HTTP client
     * @param headersService Used to add headers, including JWT
     */
    constructor(private http: HttpClient, 
                private headersService: HeadersService) {}
  
    /**
     * listMatches retrieves a user's matches from the gitdate api
     * endpoint /match/user
     */
    public listMatches(): Observable<DisplayMatch[]> {

        const headers = this.headersService.getHeaders();

        return this.http.get<DisplayMatch[]>(this.URL + '/user', { headers });
    }
    
  }