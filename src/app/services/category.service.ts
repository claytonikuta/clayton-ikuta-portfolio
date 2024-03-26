import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { CATEGORIES } from '../data/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}
  getThemes(): Category[] {
    return CATEGORIES;
  }
}
