import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { Category } from '../../models/category';
import { Tag } from '../../models/tag';

import { ProjectFilterPipe } from '../../pipes/project-filter.pipe';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { ProjectComponent } from '../project/project.component';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectFilterPipe,
    ProjectComponent,
    RouterOutlet,
    TagsComponent,
    CategoriesComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(private projectService: ProjectService, public router: Router) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  ngOnInit(): void {
    this.getProjects();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  selectedProject?: Project;

  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
  }
}
