import { Component, OnInit } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * `PolicyComponent` displays the privacy policy or legal notice page.
 *
 * It includes translation support and ensures the page scrolls to the top on load.
 */
@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss',
})
export class PolicyComponent implements OnInit {
  /**
   * Creates an instance of `PolicyComponent` with translation support.
   *
   * @param translate The translation service used for multilingual content.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Changes the language of the application.
   *
   * @param language The language code to switch to (e.g., 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Lifecycle hook that runs after component initialization.
   * Scrolls the page to the top.
   */
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
