// three.service.ts

import * as THREE from 'three';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThreeService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;

  private cube: THREE.Mesh;
  private material: THREE.ShaderMaterial;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer != null) {
      this.renderer.dispose();
      this.renderer = null;
      this.canvas = null;
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(300, 300);

    this.scene = new THREE.Scene();

    const objectSize = 2;
    const canvasSize = 400;

    let fov = 75;

    let distance = (0.5 * canvasSize) / Math.tan(((Math.PI / 180) * fov) / 2);

    fov = 2 * Math.atan(objectSize / (2 * distance)) * (180 / Math.PI);

    this.camera = new THREE.PerspectiveCamera(
      fov,
      canvasSize / canvasSize,
      0.1,
      1000
    );
    this.camera.position.z = distance;
    this.scene.add(this.camera);

    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        mouse: { value: new THREE.Vector3(0, 0, 5) },
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        uniform vec2 mouse;
      
        void main() {
          vec3 pos = position;
          pos.z += sin(pos.x * 10.0 + time + mouse.x) * 0.1;
          pos.y += sin(pos.y * 10.0 + time + mouse.y) * 0.1;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        void main() {
          float gray = 0.5 + 0.5 * sin(vUv.x * 10.0);
          gl_FragColor = vec4(gray, gray, gray, 1.0);
        }
      `,
    });
    this.cube = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.cube);
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
      window.addEventListener('mousemove', (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 20 - 10;
        const mouseY = -(event.clientY / window.innerHeight) * 20 + 10;

        this.material.uniforms['mouse'].value.x = mouseX;
        this.material.uniforms['mouse'].value.y = mouseY;
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = 300 / 300;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(300, 300);
  }
}
