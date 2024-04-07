import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  blog!: Blog;
  mediaItems: (string | null)[] = [];
  expandedIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogService.getBlog(id);
    this.prepareMediaGallery();
  }
  goBack(): void {
    this.location.back();
  }
  prepareMediaGallery(): void {
    const images = [
      this.blog.image1,
      this.blog.image2,
      this.blog.image3,
      this.blog.image4,
      this.blog.image5,
      this.blog.image6,
      this.blog.image7,
    ].filter((img) => img !== null && img !== 'null');
    this.mediaItems = images;
  }

  toggleExpand(index: number): void {
    console.log(`Image at index ${index} clicked`);
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  toggleBodyClass(isExpanded: boolean): void {
    const body = document.body;
    if (isExpanded) {
      body.classList.add('expanded-image');
    } else {
      body.classList.remove('expanded-image');
    }
  }
}
