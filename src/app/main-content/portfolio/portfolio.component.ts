import { Component } from '@angular/core';
import { SingleProjectsComponent } from './single-projects/single-projects.component';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleProjectsComponent, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(public translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
