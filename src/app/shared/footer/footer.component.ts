import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * `FooterComponent` displays the footer section of the application.
 *
 * It includes language switching functionality and a scroll-to-top button.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  /**
   * Initializes the `FooterComponent` with translation service.
   *
   * @param translate The translation service used for multi-language support.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Changes the current language of the application.
   *
   * @param language The language key to switch to (e.g., 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Scrolls the page to the top if already on the homepage,
   * otherwise redirects to the homepage (`'/'`).
   */
  scrollToTop(): void {
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/index.html'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  }
}
