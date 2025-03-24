import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public translate: TranslateService, private router: Router) {}

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

  onLogoClick(): void {
    if (this.router.url === '/' || this.router.url === '/index.html') {
      // Schon auf der Startseite → nur scrollen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Auf einer Unterseite → per Router zur Startseite (ohne reload)
      this.router.navigate(['/']);
    }
  }
}
