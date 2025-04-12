import { Component, OnInit } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * `LegalnoticeComponent` displays the legal notice (Impressum) of the application.
 *
 * It provides multilingual support and ensures the page is scrolled to the top on load.
 */
@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss',
})
export class LegalnoticeComponent implements OnInit {
  /**
   * Creates an instance of `LegalnoticeComponent` with translation support.
   *
   * @param translate The translation service used to change application language.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Changes the application's language.
   *
   * @param language The language key (e.g., 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Lifecycle hook that is called after component initialization.
   * Scrolls the window to the top of the page.
   */
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
