import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

/**
 * `HeaderComponent` represents the top navigation bar of the application.
 *
 * It includes language switching, navigation to sections, responsive menu toggling, and a clickable logo.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /**
   * Controls whether the mobile navigation menu is toggled open or closed.
   */
  isToggle = true;

  /**
   * Creates an instance of `HeaderComponent`.
   *
   * @param translate The translation service used to change languages.
   * @param router The Angular router used for navigation.
   */
  constructor(public translate: TranslateService, private router: Router) {}

  /**
   * Changes the application's current language.
   *
   * @param language The language key to switch to (e.g. 'en', 'de').
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Scrolls smoothly to a section of the page by its element ID and toggles the mobile menu.
   *
   * @param event The triggering click event.
   * @param sectionId The ID of the section to scroll to.
   */
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isToggle = true;
  }

  /**
   * Toggles the visibility of the mobile navigation menu.
   */
  toggleMenu() {
    this.isToggle = !this.isToggle;
  }

  /**
   * Handles the behavior when the logo is clicked.
   * Scrolls to the top if already on the homepage; otherwise, navigates to the homepage.
   */
  onLogoClick(): void {
    if (this.router.url === '/' || this.router.url === '/index.html') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }
}
