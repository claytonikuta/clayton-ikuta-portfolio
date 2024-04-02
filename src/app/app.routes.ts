import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { ThreeComponent } from './components/three/three.component';
import { LandingProjectsComponent } from './components/landing-projects/landing-projects.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'three', component: ThreeComponent, pathMatch: 'full' },
  {
    path: 'landing-projects',
    component: LandingProjectsComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
