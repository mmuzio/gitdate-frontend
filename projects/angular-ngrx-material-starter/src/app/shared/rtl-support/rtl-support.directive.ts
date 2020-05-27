import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

/**
 * RtlSupportDirective helps to style text to be read left-to-right or 
 * right-to-left depending on the user's preffered language
 */
@Directive({
  selector: '[rtl]' // tslint:disable-line
})
export class RtlSupportDirective implements OnInit, OnDestroy {

  /**
   * 
   */
  private subscription: Subscription;

  /**
   * Set the textAlign and direction properties of an HTML element for RTL support
   * @param el The HTML element reference
   * @param translate The translation service
   */
  constructor(private el: ElementRef, public translate: TranslateService) {
    el.nativeElement.style.textAlign =
      translate.currentLang === 'he' ? 'right' : 'left';
    el.nativeElement.style.direction =
      translate.currentLang === 'he' ? 'rtl' : 'ltr';
  }

  /**
   * Set the textAlign and direction properties of an HTML element for RTL support. 
   * Subscribed to onLangeChange event to style properly if user's preffered language changes.
   */
  ngOnInit() {
    this.subscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.el.nativeElement.style.textAlign =
          event.lang === 'he' ? 'right' : 'left';
        this.el.nativeElement.style.direction =
          event.lang === 'he' ? 'rtl' : 'ltr';
      }
    );
  }

  /**
   * Close out subscription on component destroy
   */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
