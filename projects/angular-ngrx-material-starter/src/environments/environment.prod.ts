// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * The location of package.json
 */
const packageJson = require('../../../../package.json');

/**
 * The base URL for the GitDate API
 */
export const API_BASE_URL = 'http://localhost:8080';

/**
 * Identifier for the OAuth access token
 */
export const ACCESS_TOKEN = 'accessToken';

/**
 * The Oauth redirect URI
 */
export const OAUTH2_REDIRECT_URI =
  'http://localhost:4200/login/oauth2/redirect';

/**
 * The GitHub authentication endpoint
 */
export const GITHUB_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

/**
 * The environment variables for development
 */
export const environment = {
  appName: 'Angular Ngrx Material Template',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress']
  },
  apiBaseURL: API_BASE_URL,
  accessToken: ACCESS_TOKEN,
  oauth2RedirectURI: OAUTH2_REDIRECT_URI,
  githubAuthURL: GITHUB_AUTH_URL
};
