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