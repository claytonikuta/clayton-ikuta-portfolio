import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router for service injection
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing functionality

@Component({
  selector: 'app-landing-projects',
  standalone: true,
  imports: [CommonModule, RouterModule], // Use RouterModule here for routing capabilities
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.scss'],
})
export class LandingProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router // Inject Router as a service, not in imports
  ) {}

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
}
