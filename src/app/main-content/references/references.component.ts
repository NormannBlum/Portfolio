import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * `ReferencesComponent` displays a list of references or testimonials.
 *
 * It supports language switching via `@ngx-translate/core`.
 */
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  /**
   * Creates an instance of `ReferencesComponent`.
   *
   * @param translate The translation service used to switch languages.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Switches the application's active language.
   *
   * @param language The language key to use (e.g. 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * List of reference entries, each containing a name, position, and a translation key for the text.
   */
  referenceList = [
    {
      name: 'Marco Gollmer',
      position: 'Team Partner',
      text: 'references.text1',
    },
    {
      name: 'Philipp Franke',
      position: 'Team Partner',
      text: 'references.text2',
    },
    {
      name: 'Martin Bock',
      position: 'Team Partner',
      text: 'references.text3',
    },
  ];
}
