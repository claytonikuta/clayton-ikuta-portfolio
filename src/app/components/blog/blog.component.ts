import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {}
  blog!: Blog;
  ngOnInit(): void {
    this.getBlog();
  }
  getBlog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogService.getBlog(id);
  }

  goBack(): void {
    this.location.back();
  }
}
