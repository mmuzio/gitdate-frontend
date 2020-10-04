import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { DisplayMessage } from '../../models/displaymessage';
import { Message } from '../../models/message';
import { FormControl, Validators } from '@angular/forms';

/**
 * ChatComponent displays messages between the current user and a matched user
 */
@Component({
  selector: 'ngrxtmp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  /**
   * Form control with validation
   */
  commentFC = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);

  /**
   * The interval for refreshing messages
   */
  interval: any;

  /**
   * The match id
   */
  matchId: number;

  /**
   * A placeholder message id
   */
  messageId = 1;

  /**
   * The list of messages to display
   */
  messageList: DisplayMessage[];

  /**
   * The current user's username
   */
  username = localStorage.getItem('username');

  /**
   * Inject necessary services
   * @param chatService The Chat Service
   * @param route The Angular Activated Router
   */
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  /**
   * Retrieve messages and set an interval to retrieve every 3 seconds
   */
  ngOnInit() {
    this.matchId = this.route.snapshot.params['id'];
    this.viewMessages();
    this.interval = setInterval(() => {
      this.viewMessages();
    }, 3000);
  }

  /**
   * Unsubscribe from the interval
   */
  ngOnDestroy() {
    // unsubscribes from the Interval Observable
    clearInterval(this.interval);
  }

  /**
   * viewMessages retrieves an array of DisplayMessages
   */
  viewMessages() {
    this.chatService
      .listMessages(this.matchId)
      .subscribe(messageList => (this.messageList = messageList));
  }

  /**
   * addMessage sends a new message
   * @param messageBody the text contained in the message body
   */
  addMessage(messageBody: string): void {
    const newMessage = new Message(
      this.messageId,
      messageBody,
      this.matchId,
      localStorage.getItem('username'),
      new Date()
    );
    this.commentFC.reset();
    this.chatService.addMessage(newMessage as Message).subscribe(response => {
      this.chatService
        .listMessages(this.matchId)
        .subscribe(messageList => (this.messageList = messageList));
    });
  }
}
