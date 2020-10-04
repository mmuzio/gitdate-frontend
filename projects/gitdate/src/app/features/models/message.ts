/**
 * The Message class is used for encapsulating
 * all of the message information
 */
export class Message {
  /**
   * The message identifier
   */
  message_id: number;

  /**
   * The message body
   */
  messageBody: string;

  /**
   * The match identifier
   */
  match_id: number;

  /**
   * The username of the message sender
   */
  username: string;

  /**
   * The time the message was submitted
   */
  submitTime: Date;

  /**
   * Create a new message
   * @param message_id The message identifier
   * @param messageBody The message body
   * @param match_id The match identifier
   * @param username The username of the message sender
   * @param submitTime The time the message was submitted
   */
  constructor(
    message_id: number,
    messageBody: string,
    match_id: number,
    username: string,
    submitTime: Date
  ) {
    this.message_id = message_id;
    this.messageBody = messageBody;
    this.match_id = match_id;
    this.username = username;
    this.submitTime = submitTime;
  }

  // /**
  //  * Get the message id
  //  */
  // public getMessage_id(): number {
  //     return this.message_id;
  // }

  // /**
  //  * Get the message body
  //  */
  // public getMessageBody(): string {
  //     return this.messageBody;
  // }

  // /**
  //  * Get the match id
  //  */
  // public getMatch_id(): number {
  //     return this.match_id;
  // }

  // /**
  //  * Get the username
  //  */
  // public getUsername(): string {
  //     return this.username;
  // }

  // /**
  //  * Get the submit time
  //  */
  // public getSubmitTime(): Date {
  //     return this.submitTime;
  // }

  // /**
  //  * Set the message id
  //  * @param message_id The message identifier
  //  */
  // public setMessage_id(message_id: number): void {
  //     this.message_id = message_id;
  // }

  // /**
  //  * Set the messsage body
  //  * @param messageBody The message body
  //  */
  // public setMessageBody(messageBody: string): void {
  //     this.messageBody = messageBody;
  // }

  // /**
  //  * Set the match id
  //  * @param match_id The match identifier
  //  */
  // public setMatch_id(match_id: number): void {
  //     this.match_id = match_id;
  // }

  // /**
  //  * Set the username
  //  * @param username The username
  //  */
  // public setUsername(username: string): void {
  //     this.username = username;
  // }

  // /**
  //  * Set the submit time
  //  * @param submitTime The submit time
  //  */
  // public setSubmitTime(submitTime: Date): void {
  //     this.submitTime = submitTime;
  // }
}
