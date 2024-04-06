import { Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { ThreeComponent } from './components/three/three.component';
import { LandingProjectsComponent } from './components/landing-projects/landing-projects.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectComponent },
  // { path: 'about', component: AboutComponent, pathMatch: 'full' },
  // { path: 'three', component: ThreeComponent, pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent, pathMatch: 'full' },
  { path: 'blogs/:id', component: BlogComponent },
  {
    path: 'landing-projects',
    component: LandingProjectsComponent,
    pathMatch: 'full',
  },
  // { path: '**', redirectTo: '' },
];
