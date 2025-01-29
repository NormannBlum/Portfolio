import { Component, Input } from '@angular/core';

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
