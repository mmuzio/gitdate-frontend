/**
 * The DisplayMatch class is used to encapsulate the match
 * information to be displayed
 */
export class DisplayMatch {
  /**
   * The match identifier
   */
  match_id: number;

  /**
   * The matched user's username
   */
  username: string;

  /**
   * Created a new match for display purposes
   * @param match_id The match identifier
   * @param username The matched user's username
   */
  constructor(match_id: number, username: string) {
    this.match_id = match_id;
    this.username = username;
  }

  /**
   * Get the match id
   */
  public getMatch_id(): number {
    return this.match_id;
  }

  /**
   * Get the username
   */
  public getUsername(): string {
    return this.username;
  }

  /**
   * Set the match id
   * @param match_id The match identifier
   */
  public setMatch_id(match_id: number): void {
    this.match_id = match_id;
  }

  /**
   * Set the username
   * @param username The matched user's username
   */
  public setUsername(username: string): void {
    this.username = username;
  }
}
