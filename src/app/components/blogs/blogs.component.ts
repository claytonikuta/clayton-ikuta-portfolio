import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { Category } from '../../models/category';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, BlogComponent, RouterOutlet, CategoriesComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  constructor(private blogService: BlogService, public router: Router) {}

  blogs: Blog[] = [];
  getBlogs(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs));
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  clearFilters() {
    this.categoryFilter = undefined;
  }

  selectedBlog?: Blog;

  @Output() newSelectedBlogEvent = new EventEmitter<Blog>();

  setSelectedBlog(blog: Blog): void {
    this.newSelectedBlogEvent.emit(blog);
  }
}
