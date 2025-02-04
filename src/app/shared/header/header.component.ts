import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
    // Prüfen, ob wir uns auf der Hauptseite befinden
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Falls wir auf einer anderen Seite sind, zur Hauptseite weiterleiten
      window.location.href = '/';
    }
  }
}
