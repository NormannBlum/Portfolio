import { Component, OnInit } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss',
})
export class LegalnoticeComponent implements OnInit {
    constructor(public translate: TranslateService) {}
  
    changeLanguage(language: string) {
      this.translate.use(language);
    }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
