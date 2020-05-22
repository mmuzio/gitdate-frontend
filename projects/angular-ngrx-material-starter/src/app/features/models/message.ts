/**
 * The Message class is used for encapsulating
 * all of the message information
 */
export class Message {
    message_id: number;
    messageBody: string;
    match_id: number;
    username: string;
    submitTime: Date;


    constructor(message_id: number, 
                messageBody: string, 
                match_id: number, 
                username: string,
                submitTime: Date) {

        this.message_id = message_id;
        this.messageBody = messageBody;
        this.match_id = match_id;
        this.username = username;
        this.submitTime = submitTime;
    }

    public getMessage_id(): number {
        return this.message_id;
    }
    public getMessageBody(): string {
        return this.messageBody;
    }

    public getMatch_id(): number {
        return this.match_id;
    }

    public getUsername(): string {
        return this.username;
    }

    public getSubmitTime(): Date {
        return this.submitTime;
    }



    public setMessage_id(message_id: number): void {
        this.message_id = message_id;
    }
    public setMessageBody(messageBody: string): void {
        this.messageBody = messageBody;
    }

    public setMatch_id(match_id: number): void {
        this.match_id = match_id;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public setSubmitTime(submitTime: Date): void {
        this.submitTime = submitTime;
    }

}
