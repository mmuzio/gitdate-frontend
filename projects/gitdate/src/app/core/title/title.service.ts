import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';

/**
 * Sets the application title in the browser
 */
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  /**
   * Inject necessary services
   * @param translateService The translate service
   * @param title The application title
   */
  constructor(
    private translateService: TranslateService,
    private title: Title
  ) {}

  /**
   * Sets the application title in the browser
   * @param snapshot The current route snapshot
   * @param lazyTranslateService The translate service
   */
  setTitle(
    snapshot: ActivatedRouteSnapshot,
    lazyTranslateService?: TranslateService
  ) {
    let lastChild = snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;
    const translate = lazyTranslateService || this.translateService;
    if (title) {
      translate
        .get(title)
        .pipe(filter(translatedTitle => translatedTitle !== title))
        .subscribe(translatedTitle =>
          this.title.setTitle(`${translatedTitle} - ${env.appName}`)
        );
    } else {
      this.title.setTitle(env.appName);
    }
  }
}
