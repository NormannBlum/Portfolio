import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
