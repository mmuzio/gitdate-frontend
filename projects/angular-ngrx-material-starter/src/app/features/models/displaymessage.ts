export class DisplayMessage {

    messageBody: string;
    username: string;
    submitTime: Date;

    constructor(messageBody: string, 
                username: string,
                submitTime: Date) {

        this.messageBody = messageBody;
        this.username = username;
        this.submitTime = submitTime;
    }

    public getMessageBody(): string {
        return this.messageBody;
    }

    public getUsername(): string {
        return this.username;
    }

    public getSubmitTime(): Date {
        return this.submitTime;
    }

    public setMessageBody(messageBody: string): void {
        this.messageBody = messageBody;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public setSubmitTime(submitTime: Date): void {
        this.submitTime = submitTime;
    }

}