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
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {}
  blog!: Blog;
  mediaItems: (string | null)[] = [];

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
      this.blog.image8,
    ].filter((img) => img !== null);
    this.mediaItems = images;
    console.log(this.mediaItems);
  }
}
