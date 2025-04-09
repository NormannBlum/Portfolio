import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * Component that displays information about the user ("About Me" section).
 *
 * Provides functionality for language switching and smooth scrolling to sections within the component.
 */
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  /**
   * Creates an instance of AboutmeComponent.
   * @param translate The translation service from ngx-translate used for internationalization.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Changes the currently active language of the application.
   *
   * @param language The language code to switch to (e.g., 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Scrolls smoothly to a specific section of the page.
   *
   * @param event The event that triggered the scroll (usually a click).
   * @param sectionId The ID of the HTML element to scroll to.
   */
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
