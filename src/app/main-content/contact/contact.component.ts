import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  constructor(public translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = false;
  showSuccessMessage = false;

  post = {
    endPoint: 'https://normann-blum.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showSuccessMessage = true;

            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000);

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);

      ngForm.resetForm();
    }
  }
}
