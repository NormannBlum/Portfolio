import { Component } from '@angular/core';
import { SingleProjectsComponent } from './single-projects/single-projects.component';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * The `PortfolioComponent` is responsible for displaying a portfolio section,
 * which includes multiple `SingleProjectsComponent` entries.
 *
 * It also supports dynamic language switching using `@ngx-translate/core`.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleProjectsComponent, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  /**
   * Creates an instance of `PortfolioComponent`.
   *
   * @param translate The translation service used to switch languages.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Changes the currently active language in the translation service.
   *
   * @param language The language key to switch to (e.g. 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
