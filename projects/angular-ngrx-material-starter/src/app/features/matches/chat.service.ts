import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DisplayMessage } from '../models/displaymessage';
import { HeadersService } from '../helpers/headers.service';

/**
 * ChatService calls the GitDate API to add and retrieve messages.
 */
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  /**
   * A message to be added for a match
   */
  message: Message;

  /**
   * The list of messages to be displayed for a match
   */
  messageList: DisplayMessage[];

  /**
   * The URL for messages
   */
  private readonly URL = environment.apiBaseURL + '/message';

  /**
   * Inject necessary services
   * @param http The HTTP Client
   * @param headersService Adds necessary headers, including JWT
   */
  constructor(private http: HttpClient, 
              private headersService: HeadersService
              ) {}

  /**
   * Calls the GitDate API to add and persist a message 
   * @param message The message to be added
   */
  public addMessage(message: Message): Observable<Message> {
    console.log(message);
    const headers = this.headersService.getHeaders();
    return this.http.post<Message>(this.URL, message, { headers });
  }

  /**
   * Calls the GitDate API to get all messages associated with a match
   */
  public listMessages(match_id: number): Observable<DisplayMessage[]> {
    const headers = this.headersService.getHeaders();
    return this.http.get<DisplayMessage[]>(this.URL + '/match?match_id=' + match_id, { headers });
  }

}