import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThreeService } from './three.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(
    private threeServ: ThreeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.threeServ.createScene(this.rendererCanvas);
      this.threeServ.animate();
    }
  }
}
