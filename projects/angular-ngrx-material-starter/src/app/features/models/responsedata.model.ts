export class ResponseData {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    content: string;
    encoding: string;
    _links: {
      self: string,
      git: string,
      html: string
    };

    constructor(name: string,
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
        self: string,
        git: string,
        html: string
      }) {
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