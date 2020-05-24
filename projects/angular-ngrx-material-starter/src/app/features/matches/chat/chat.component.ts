import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayMessage } from '../../models/displaymessage';
import { Message } from '../../models/message';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngrxtmp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(private chatService: ChatService,
    private route: ActivatedRoute,
    private router: Router) { }

  commentFC = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);

  alive = true;

  interval: any;

  messageList: DisplayMessage[];

  message_id = 1;

  match_id: number;

  username = localStorage.getItem('username');

  nd = new Date();

  time = this.nd.getHours() + ':' + this.nd.getMinutes();

  characterCount: number;
  current: number;
  maximum: number;
  theCount: number;
  currentcolor: string;
  maxcolor: string;

  ngOnInit() {
    this.alive = true;
    this.match_id = this.route.snapshot.params['id'];
    this.viewMessages();
    this.interval = setInterval(() => {
      this.viewMessages();
    }, 100000);
  }

  ngOnDestroy() {
    // unsubscribes from the Interval Observable
    clearInterval(this.interval);
  }

  /**
   * viewMessages retrieves an array of DisplayMessages
   */
  viewMessages() {
    this.chatService.listMessages(this.match_id)
      .subscribe(messageList => this.messageList  = messageList);
  }

  /**
   * addMessage
   * @param messageBody the text contained in the message body
   */
  addMessage(messageBody: string): void {

    const newMessage = new Message(
      this.message_id,
      messageBody,
      this.match_id,
      localStorage.getItem('username'),
      new Date()
    );
    this.commentFC.reset();
    this.chatService.addMessage(newMessage as Message)
      .subscribe(response => {
      this.chatService.listMessages(this.match_id).subscribe(messageList => this.messageList  = messageList);
    });

  }

  onKey(event: any) {

    if (event.target.val !== undefined) {
      this.characterCount = event.target.val.length;
    } 

    /*This isn't entirely necessary, just playin around*/
    if (this.characterCount < 70) {
      this.currentcolor = '#666';
    }
    if (this.characterCount > 70 && this.characterCount < 90) {
      this.currentcolor = '#6d5555';
    }
    if (this.characterCount > 90 && this.characterCount < 100) {
      this.currentcolor = '#793535';
    }
    if (this.characterCount > 100 && this.characterCount < 120) {
      this.currentcolor = '#841c1c';
    }
    if (this.characterCount > 120 && this.characterCount < 139) {
      this.currentcolor = '#8f0001';
    }

    if (this.characterCount >= 140) {
      this.maxcolor = '#8f0001';
      this.currentcolor = '#8f0001';
    } else {
      this.maxcolor = '#666';
    }
  }

}
