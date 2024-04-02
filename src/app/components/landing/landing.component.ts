import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from '../three/three.component';
import { ProjectsComponent } from '../projects/projects.component';
import { OtherComponent } from '../other/other.component';
import { AboutComponent } from '../about/about.component';
import { LandingProjectsComponent } from '../landing-projects/landing-projects.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    ThreeComponent,
    ProjectsComponent,
    AboutComponent,
    OtherComponent,
    LandingProjectsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
