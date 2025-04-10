import { Component, Input } from '@angular/core';

/**
 * `SingleProjectsComponent` is a presentational component that displays
 * the details of a single project, such as title, description, image, and links.
 *
 * It supports layout customization through the `reverseLayout` flag.
 */
@Component({
  selector: 'app-single-projects',
  standalone: true,
  imports: [],
  templateUrl: './single-projects.component.html',
  styleUrl: './single-projects.component.scss',
})
export class SingleProjectsComponent {
  @Input() projectNumber = '';
  @Input() projectTitle = '';
  @Input() projectSkills = '';
  @Input() projectDescription = '';
  @Input() projectImage = '';
  @Input() projectLink = '';
  @Input() projectGithub = '';

  @Input() reverseLayout = false;
}
