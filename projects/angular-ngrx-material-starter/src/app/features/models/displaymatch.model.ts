/**
 * The DisplayMatch class is used to encapsulate the match
 * information to be displayed
 */
export class DisplayMatch {

    match_id: number;
    username: string;

    constructor(match_id: number, username: string) {

        this.match_id = match_id;
        this.username = username;
    }

    public getMatch_id(): number {
        return this.match_id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setMatch_id(match_id: number): void {
        this.match_id = match_id;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

}