import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DisplayMessage } from '../models/displaymessage';
import { HeadersService } from '../headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly URL = environment.apiBaseURL + '/message';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  message: Message;

  messageList: DisplayMessage[];

  public listMessages(match_id: number): Observable<DisplayMessage[]> {
    const headers = this.headersService.getHeaders();
    return this.http.get<DisplayMessage[]>(this.URL + '/match?match_id=' + match_id, { headers });
  }

//   public addMessage(message: Message): Observable<Message> {
//     console.log(message);
//     const headers = this.headersService.getHeaders();
//     return this.http.post<Message>(this.URL + '?message_id=' + message.message_id +
//     '&messageBody=' + message.messageBody + '&match_id=' + message.match_id +
//     '&username=' + message.username + '&submitTime=' + message.submitTime, { headers });
//   }

  public addMessage(message: Message): Observable<Message> {
    console.log(message);
    const headers = this.headersService.getHeaders();
    return this.http.post<Message>(this.URL, message, { headers });
  }

  constructor(private http: HttpClient, private headersService: HeadersService) {}
}