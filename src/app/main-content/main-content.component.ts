import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { ArrowAnimationRightComponent } from '../shared/arrow-animation-right/arrow-animation-right.component';
import { ArrowAnimationLeftComponent } from '../shared/arrow-animation-left/arrow-animation-left.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutmeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ReferencesComponent,
    ArrowAnimationRightComponent,
    ArrowAnimationLeftComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
