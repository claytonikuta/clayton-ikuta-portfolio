import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.scss'],
})
export class LandingProjectsComponent implements OnInit {
  projects: Project[] = [];
  hoveredProjectId: number | null = null;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  openProject(project: Project): void {
    if (project.url !== 'null') {
      const url =
        project.url.startsWith('http://') || project.url.startsWith('https://')
          ? project.url
          : `https://${project.url}`;
      window.open(url, '_blank');
    } else {
      this.router.navigate(['/projects/' + project.id]);
    }
  }

  onMouseEnter(projectId: number): void {
    this.hoveredProjectId = projectId;
  }

  onMouseLeave(): void {
    this.hoveredProjectId = null;
  }

  isHovered(project: Project): boolean {
    return this.hoveredProjectId === project.id;
  }
}
