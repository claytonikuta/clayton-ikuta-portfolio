import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  project!: Project;
  mediaItems: (string | null)[] = [];
  videoUrl: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
  }
  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
    this.prepareMediaGallery();
  }

  prepareMediaGallery(): void {
    const images = [
      this.project.image1,
      this.project.image2,
      this.project.image3,
      this.project.image4,
      this.project.image5,
    ].filter((img) => img !== null);
    this.mediaItems = images;
    this.videoUrl = this.project.video;
  }

  playVideo(videoElement: HTMLVideoElement): void {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
