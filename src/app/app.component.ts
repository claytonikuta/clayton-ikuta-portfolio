import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';

import { Category } from './models/category';
import { Tag } from './models/tag';
import { Project } from './models/project';

import { ProjectFilterPipe } from './pipes/project-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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

  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  selectedProject?: Project;

  constructor(public router: Router) {}

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.tagFilter = undefined;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.categoryFilter = undefined;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }
}
