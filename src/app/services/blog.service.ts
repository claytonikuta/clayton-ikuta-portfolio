import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../models/blog';
import { BLOGS } from '../data/blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}
  getBlogs(): Observable<Blog[]> {
    const blogs = of(BLOGS);
    return blogs;
  }
  getBlog(id: number): Blog {
    return BLOGS.find((blog) => blog.id === id)!;
  }
}
