import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public translate: TranslateService) {}
  
    changeLanguage(language: string) {
      this.translate.use(language);
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
