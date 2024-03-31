import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from '../components/three/three.component';
import { ProjectComponent } from '../components/project/project.component';

@NgModule({
  declarations: [ThreeComponent],
  exports: [ThreeComponent],
  imports: [CommonModule],
})
export class SharedModule {}
