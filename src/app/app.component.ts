import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterOutlet,
  RouterLinkActive,
  RouterLink,
} from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';

import { BlogComponent } from './components/blog/blog.component';

import { ProjectFilterPipe } from './pipes/project-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BlogComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ProjectFilterPipe,
    ProjectsComponent,
    ProjectComponent,
    CategoriesComponent,
    TagsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Clayton Ikuta';
  date = new Date();
  author = 'Clayton Ikuta';

  constructor(public router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }
}
