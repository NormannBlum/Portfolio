import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * `SkillsComponent` displays the user's skills section.
 *
 * It includes support for language switching and smooth scrolling to other sections.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  /**
   * Initializes the `SkillsComponent` with translation service.
   *
   * @param translate The translation service used to manage the active language.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Switches the active language of the application.
   *
   * @param language The language key to switch to (e.g., 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Smoothly scrolls the page to the given section by its ID.
   *
   * @param event The event triggered by the link click.
   * @param sectionId The ID of the target section to scroll to.
   */
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
