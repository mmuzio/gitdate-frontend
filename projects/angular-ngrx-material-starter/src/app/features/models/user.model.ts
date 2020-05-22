/**
 * The User class is used for encapsulating
 * User properties associated with a 
 * Github Oauth 2.0 authenticated user
 */
export class User {
    email: string;
    emailVerified: boolean;
    id: number;
    imageUrl: string;
    name: string;
    provider: string;
    providerId: string;
    username: string;

    constructor(
        email: string,
        emailVerified: boolean,
        id: number,
        imageUrl: string,
        name: string,
        provider: string,
        providerId: string,
        username: string) {
        this.email = email;
        this.emailVerified = emailVerified;
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.provider = provider;
        this.providerId = providerId;
        this.username = username;
      }
}