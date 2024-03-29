import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThreeService } from './three.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss',
})
export class ThreeComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private threeServ: ThreeService) {}

  public ngOnInit(): void {
    this.threeServ.createScene(this.rendererCanvas);
    this.threeServ.animate();
  }
}
