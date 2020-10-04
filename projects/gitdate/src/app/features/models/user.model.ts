/**
 * The User class is used for encapsulating
 * User properties associated with a
 * Github Oauth 2.0 authenticated user
 */
export class User {
  /**
   * The user's email
   */
  email: string;

  /**
   * The user's email verification status
   */
  emailVerified: boolean;

  /**
   * The user's id
   */
  id: number;

  /**
   * The user's image URL
   */
  imageUrl: string;

  /**
   * The user's full name
   */
  name: string;

  /**
   * The OAuth provider (GitHub)
   */
  provider: string;

  /**
   * A provider identifier
   */
  providerId: string;

  /**
   * The user's username
   */
  username: string;

  /**
   * Create a new user
   * @param email The user's email
   * @param emailVerified The user's email verification status
   * @param id The user's id
   * @param imageUrl The user's image URL
   * @param name The user's full name
   * @param provider The OAuth provider (GitHub)
   * @param providerId A provider identifier
   * @param username The user's username
   */
  constructor(
    email: string,
    emailVerified: boolean,
    id: number,
    imageUrl: string,
    name: string,
    provider: string,
    providerId: string,
    username: string
  ) {
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
