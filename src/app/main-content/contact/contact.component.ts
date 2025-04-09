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

/**
 * The `ContactComponent` is a standalone Angular component that provides a contact form.
 *
 * Users can fill out their name, email, and message. The form submission is sent to an external mail endpoint.
 * The component also supports language switching via `@ngx-translate/core`.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  /**
   * Injected instance of Angular's `HttpClient` for sending HTTP requests.
   */
  http = inject(HttpClient);

  /**
   * Creates an instance of `ContactComponent`.
   *
   * @param translate The translation service used for language switching.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Switches the application's active language.
   *
   * @param language Language key (e.g., `'en'`, `'de'`) to switch to.
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Model for the contact form data.
   */
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  /**
   * If true, a fake "mail sent" scenario is triggered for testing.
   */
  mailTest = false;

  /**
   * Controls visibility of the success message after form submission.
   */
  showSuccessMessage = false;

  /**
   * Configuration for the HTTP POST request to send the contact form.
   */
  post = {
    /**
     * The endpoint URL where the form data is sent.
     */
    endPoint: 'https://normann-blum.de/sendMail.php',

    /**
     * Function to serialize the payload into a string.
     *
     * @param payload The contact form data.
     * @returns Serialized JSON string of the payload.
     */
    body: (payload: any) => JSON.stringify(payload),

    /**
     * HTTP options including headers.
     */
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission.
   *
   * Sends the contact form data to the configured mail endpoint.
   * Shows a success message if the request succeeds or if `mailTest` is enabled.
   *
   * @param ngForm Reference to the Angular `NgForm` object.
   */
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
