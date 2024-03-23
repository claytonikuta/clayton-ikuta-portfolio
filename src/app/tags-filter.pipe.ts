import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './app.component';
import { Project } from './app.component';

@Pipe({
  name: 'tagsFilter',
  pure: false,
  standalone: true,
})
export class TagsFilterPipe implements PipeTransform {

  transform(projects: Project[], tag: Tag): Project[] {
    if (!projects || !tag) {
      return projects;
    }
    return projects.filter(project => project.tags?.some(t => t.id === tag.id));
  }
}