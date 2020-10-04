/**
 * The ResponseData class is used for encapsulating
 * the response from a call to the Github REST API
 */
export class ResponseData {
  /**
   * The resource name
   */
  name: string;

  /**
   * The resource path
   */
  path: string;

  /**
   * The sha value
   */
  sha: string;

  /**
   * The resource size
   */
  size: number;

  /**
   * The URL
   */
  url: string;

  /**
   * The HTML URL
   */
  html_url: string;

  /**
   * The git URL
   */
  git_url: string;

  /**
   * The download URL
   */
  download_url: string;

  /**
   * The resource type
   */
  type: string;

  /**
   * The resource content
   */
  content: string;

  /**
   * The encoding type
   */
  encoding: string;

  /**
   * The links for further requests
   */
  _links: {
    self: string;
    git: string;
    html: string;
  };

  /**
   * Create a new ResponseData object
   * @param name The resource name
   * @param path The resource path
   * @param sha The sha value
   * @param size The resource size
   * @param url The URL
   * @param html_url The HTML URL
   * @param git_url THe git URL
   * @param download_url The download URL
   * @param type The resource type
   * @param content The resource content
   * @param encoding The encoding type
   * @param _links The links for further requests
   */
  constructor(
    name: string,
    path: string,
    sha: string,
    size: number,
    url: string,
    html_url: string,
    git_url: string,
    download_url: string,
    type: string,
    content: string,
    encoding: string,
    _links: {
      self: string;
      git: string;
      html: string;
    }
  ) {
    this.name = name;
    this.path = path;
    this.sha = sha;
    this.size = size;
    this.url = url;
    this.html_url = html_url;
    this.git_url = git_url;
    this.download_url = download_url;
    this.type = type;
    this.content = content;
    this.encoding = encoding;
    this._links = _links;
  }
}
