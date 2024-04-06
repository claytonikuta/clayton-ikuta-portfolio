import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterOutlet,
  RouterLinkActive,
  RouterLink,
} from '@angular/router';

import { ProjectComponent } from './components/project/project.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { LanguagesComponent } from './components/languages/languages.component';

import { BlogsComponent } from './components/blogs/blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BlogsComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ProjectComponent,
    CategoriesComponent,
    LanguagesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Clayton Ikuta';
  date = new Date();
  author = 'Clayton Ikuta';

  constructor(public router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }
}
