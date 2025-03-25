import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  constructor(public translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  referenceList = [
    {
      name: 'Marco Gollmer',
      position: 'Team Partner',
      text: 'references.text1',
    },
    {
      name: 'Philipp Franke',
      position: 'Team Partner',
      text: 'references.text2',
    },
    {
      name: 'Martin Bock',
      position: 'Team Partner',
      text: 'references.text3',
    },
  ];
}
