import { Injectable } from '@angular/core';
import { environment, ACCESS_TOKEN } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
     * listMatches retrieves a user's matches from the gitdate api
     * endpoint /match/user
     */
    public listMatches(): Observable<DisplayMatch[]> {

        const headers = this.headersService.getHeaders();

        return this.http.get<DisplayMatch[]>(this.URL + '/user', { headers });
    }
  
    /**
     * Inject the necessary services
     * @param http The HTTP client
     * @param headersService Used to add headers, including JWT
     */
    constructor(private http: HttpClient, private headersService: HeadersService) {}
    
  }