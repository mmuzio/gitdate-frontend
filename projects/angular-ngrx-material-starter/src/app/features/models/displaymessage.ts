/**
 * The DisplayMessage class is used for encapsulating
 * the message information to be displayed
 */
export class DisplayMessage {

    /**
     * The body of the message
     */
    messageBody: string;

    /**
     * The username of the message sender
     */
    username: string;

    /**
     * The time the message was submitted
     */
    submitTime: Date;

    /**
     * 
     * @param messageBody The body of the message
     * @param username The username of the message sender
     * @param submitTime The time the message was submitted
     */
    constructor(messageBody: string, 
                username: string,
                submitTime: Date) {

        this.messageBody = messageBody;
        this.username = username;
        this.submitTime = submitTime;
    }

    /**
     * Get the message body
     */
    public getMessageBody(): string {
        return this.messageBody;
    }

    /**
     * Get the username
     */
    public getUsername(): string {
        return this.username;
    }

    /**
     * Get the submit time
     */
    public getSubmitTime(): Date {
        return this.submitTime;
    }

    /**
     * Set the message body
     * @param messageBody The message body
     */
    public setMessageBody(messageBody: string): void {
        this.messageBody = messageBody;
    }

    /**
     * Set the username
     * @param username The username
     */
    public setUsername(username: string): void {
        this.username = username;
    }

    /**
     * Set the submit time
     * @param submitTime The submit time
     */
    public setSubmitTime(submitTime: Date): void {
        this.submitTime = submitTime;
    }

}