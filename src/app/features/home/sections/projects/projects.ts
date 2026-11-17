import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { PROFILE } from '../../../../core/config';
import { PROJECTS, projectImage } from '../../../../data/projects';
import { Icon } from '../../../../shared/icon/icon';
import { RevealDirective } from '../../../../shared/reveal.directive';
import { ALL_TAG, collectTags, filterProjects, sortProjects } from '../../../../shared/utils/project-filter';

@Component({
  selector: 'app-projects',
  imports: [Icon, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly all = sortProjects(PROJECTS);

  protected readonly github = PROFILE.github;
  protected readonly image = projectImage;
  protected readonly tags = [ALL_TAG, ...collectTags(this.all)];
  protected readonly selected = signal(ALL_TAG);
  protected readonly visible = computed(() => filterProjects(this.all, this.selected()));

  protected select(tag: string): void {
    this.selected.set(tag);
  }
}
