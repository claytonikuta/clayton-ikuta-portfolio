import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from '../three/three.component';
import { AboutComponent } from '../about/about.component';
import { LandingProjectsComponent } from '../landing-projects/landing-projects.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    ThreeComponent,
    AboutComponent,
    LandingProjectsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const parallaxLines = document.querySelectorAll('.parallax-line');

    parallaxLines.forEach((line) => {
      if (line instanceof HTMLElement) {
        const lineTop = line.getBoundingClientRect().top + window.scrollY;
        const nextSection = line.nextElementSibling;

        if (nextSection instanceof HTMLElement) {
          const nextSectionTop =
            nextSection.getBoundingClientRect().top + window.scrollY;
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight;

          const startEffectScroll = lineTop - windowHeight + 100;
          const endEffectScroll = nextSectionTop - windowHeight / 2;

          const progress = Math.min(
            Math.max(
              (scrolled - startEffectScroll) /
                (endEffectScroll - startEffectScroll),
              0
            ),
            1
          );

          line.style.width = `${progress * 100}%`;
        }
      }
    });
  }
}
