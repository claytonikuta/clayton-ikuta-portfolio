import { Injectable } from '@angular/core';
import { Language } from '../models/language';
import { LANGUAGES } from '../data/languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}
  getLanguages(): Language[] {
    return LANGUAGES;
  }
}
