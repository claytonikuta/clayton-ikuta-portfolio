import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss',
})
export class LanguagesComponent {
  constructor(private languageService: LanguageService) {}

  languages: Language[] = [];
  getLanguages(): void {
    this.languages = this.languageService.getLanguages();
  }
  ngOnInit(): void {
    this.getLanguages();
  }

  @Input() languageFilter: Language | undefined;
  @Output() newLanguageFilterEvent = new EventEmitter<Language>();

  setLanguageFilter(language: Language) {
    this.languageFilter = language;
    this.newLanguageFilterEvent.emit(language);
  }
}
