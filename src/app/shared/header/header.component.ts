import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isToggle = true;
  }

  isToggle = true;

  toggleMenu() {
    this.isToggle = !this.isToggle;
  }

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
