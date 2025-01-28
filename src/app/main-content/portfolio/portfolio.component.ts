import { Component } from '@angular/core';
import { SingleProjectsComponent } from './single-projects/single-projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  join: string =
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.';
  polloloco: string =
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and bottles in order to defeat the endboss.';
  pokedex: string =
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.';
}
