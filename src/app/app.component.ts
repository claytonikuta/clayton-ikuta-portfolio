import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TagsFilterPipe } from './tags-filter.pipe';

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Project {
  'id': number;
  'name': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TagsFilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = "Clayton Ikuta's Portfolio";
  date = new Date();
  author = 'Clayton Ikuta';
  categories = [
    { "id": 1, "slug": "back-end", "name": "Back End" },
    { "id": 2, "slug": "front-end", "name": "Front End" },
    { "id": 3, "slug": "full-stack", "name": "Full Stack" }
  ];
  tags = [
    { id: 1, name: 'JavaScript', slug: 'javascript' },
    { id: 2, name: 'C#', slug: 'c#' },
    { id: 3, name: 'Angular', slug: 'angular' },
    { id: 4, name: 'TypeScript', slug: 'typescript' },
    { id: 5, name: 'React', slug: 'react' },
    { id: 6, name: 'HTML', slug: 'html' },
    { id: 7, name: 'CSS', slug: 'css' },
  ];
  projects = [
    { 
      id: 1, 
      name: 'JavaScript Game', 
      slug: 'javascript-game', 
      excerpt: 'A forklift JavaScript game.', 
      body: 'A forklift game build in JavaScript where the user drivers forklift around and delivers pallets to the delivery truck', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 3, 
      created_at: '2023-12-13', 
      updated_at: '2023-12-13', 
      category: { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      tags: [
        {
          "id": 1,
          "name": "JavaScript",
          "slug": "javascript",
          "pivot": { "projects_id": 1, "tags_id": 1 }
        },
        {
          "id": 6,
          "name": "HTML",
          "slug": "html",
          "pivot": { "projects_id": 1, "tags_id": 2 }
        },
        {
          "id": 7,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 1, "tags_id": 3 }
        }
      ]
    },
    { 
      id: 2, 
      name: 'Movie App', 
      slug: 'movie-app', 
      excerpt: 'A movie database app.', 
      body: '<p>Built using Next.js and react, this app uses the movie database API to display movies and tv shows.</p></p>The user can search for movies and tv shows, and view details about each movie or tv show. This user can create</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 3, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      tags: [
        {
          "id": 4,
          "name": "TypeScript",
          "slug": "typescript",
          "pivot": { "projects_id": 2, "tags_id": 1 }
        },
        {
          "id": 5,
          "name": "React",
          "slug": "react",
          "pivot": { "projects_id": 2, "tags_id": 2 }
        },
        {
          "id": 7,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 2, "tags_id": 3 }
        }
      ]
    },
    { 
      id: 3, 
      name: 'Cards Web Shop', 
      slug: 'Cards Web Shop', 
      excerpt: 'A working web shop to purchase playing cards.', 
      body: '<p>Built using C#, this is a working web shop where users can create a cart and checkout using paypal.</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 3, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      tags: [
        {
          "id": 1,
          "name": "C#",
          "slug": "c#",
          "pivot": { "projects_id": 3, "tags_id": 1 }
        },
      ]
    },
    { 
      id: 4, 
      name: 'News Site Home Page', 
      slug: 'News Site Home Page', 
      excerpt: 'A responsive news site home page.', 
      body: '<p>Built to show off CSS custom properties, combinators and motion using CSS, SASS, HTML and JavaScript</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 2, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 2, "slug": "front-end", "name": "Front End" },
      tags: [
        {
          "id": 1,
          "name": "JavaScript",
          "slug": "javascript",
          "pivot": { "projects_id": 4, "tags_id": 1 }
        },
        {
          "id": 6,
          "name": "HTML",
          "slug": "HTML",
          "pivot": { "projects_id": 4, "tags_id": 2 }
        },
        {
          "id": 7,
          "name": "CSS",
          "slug": "CSS",
          "pivot": { "projects_id": 4, "tags_id": 3 }
        },
      ]
    },
    { 
      id: 5, 
      name: 'Outdoor Web Store', 
      slug: 'Outdoor Web Store', 
      excerpt: 'A fully functioning web store for outdoor gear.', 
      body: '<p>A fully designed system for sustainable revenue generation. Built using C# to showcase a realistic web store.</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 3, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      tags: [
        {
          "id": 1,
          "name": "C#",
          "slug": "c#",
          "pivot": { "projects_id": 5, "tags_id": 1 }
        },
      ]
    },
    { 
      id: 6, 
      name: 'Industry Partner Project', 
      slug: 'Industry Partner Project', 
      excerpt: 'A project built with an industry partner.', 
      body: '<p>A fully functioning project built for a real world client.</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 3, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      tags: [
        {
          "id": 4,
          "name": "TypeScript",
          "slug": "typescript",
          "pivot": { "projects_id": 6, "tags_id": 1 }
        },
        {
          "id": 5,
          "name": "React",
          "slug": "react",
          "pivot": { "projects_id": 6, "tags_id": 2 }
        },
        {
          "id": 7,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 6, "tags_id": 3 }
        }
      ]
    },
    { 
      id: 7, 
      name: 'Jobsite Band Page', 
      slug: 'Jobsite Band Page', 
      excerpt: 'A landing website used by the band JOBSITE.', 
      body: '<p>A landing website that showcases the music and information used by a real world band.</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 2, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 2, "slug": "front-end", "name": "Front End" },
      tags: [
        {
          "id": 4,
          "name": "TypeScript",
          "slug": "typescript",
          "pivot": { "projects_id": 7, "tags_id": 1 }
        },
        {
          "id": 5,
          "name": "React",
          "slug": "react",
          "pivot": { "projects_id": 7, "tags_id": 2 }
        },
        {
          "id": 7,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 7, "tags_id": 3 }
        }
      ]
    },
    { 
      id: 8, 
      name: 'React Notes App', 
      slug: 'React Notes App', 
      excerpt: 'A React notes app backend deployed using AWS.', 
      body: '<p>A database of notes built in React and stored in MySql deployed with AWS.</p>', 
      url: 'null', 
      published_date: 'null', 
      image: 'null', 
      thumb: 'null', 
      category_id: 1, 
      created_at: '2024-03-13', 
      updated_at: '2024-03-13', 
      category: { "id": 1, "slug": "back-end", "name": "Back End" },
      tags: [
        {
          "id": 5,
          "name": "React",
          "slug": "react",
          "pivot": { "projects_id": 8, "tags_id": 2 }
        },
      ]
    },
  ];
  categoryFilter: Category | null = null;
  activeFilter: Category | null = null;
  tagFilter: Tag | null = null;
  setCategoryFilter(category: Category) {
    console.log('Setting Category Filter:', category);
    this.categoryFilter = category;
    this.activeFilter = category;
  }
  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }
  clearCategoryFilter() {
    this.categoryFilter = null;
    this.activeFilter = null;
  }
  get filteredProjects(): Project[] {
    if (this.categoryFilter) {
      return this.projects.filter(project => project.category_id === this.categoryFilter!.id);
    } else {
      return this.projects;
    }
  }
}

