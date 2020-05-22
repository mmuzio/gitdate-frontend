/**
 * The RegisterUser class is used for encapsulating
 * the user's login and register information, which
 * is just username and password
 */
export class RegisterUser {
    username: string;
    password: string;
    // firstName: string;
    // lastName: string;

    constructor(username: string, password: string
                // firstName: string, lastName: string
                ) {
        this.username = username;
        this.password = password;
        // this.firstName = firstName;
        // this.lastName = lastName;

    }
    public getUsername(): string {
        return this.username;
    }
    public getPassword(): string {
        return this.password;
    }
    // public getFirstName(): string {
    //     return this.firstName;
    // }
    // public getLastName(): string {
    //     return this.lastName;
    // }
    public setUsername(username: string): void {
        this.username = username;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    // public setFirstName(firstName: string): void {
    //     this.firstName = firstName;
    // }
    // public setLastName(lastName: string): void {
    //     this.lastName = lastName;
    // }
}