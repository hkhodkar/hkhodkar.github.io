import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';

import { PROFILE, SITE_URL } from '../../core/config';
import { SeoService } from '../../core/seo.service';
import { EDUCATION, EXPERIENCE, SKILL_GROUPS, SUMMARY } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { Icon } from '../../shared/icon/icon';
import { sortProjects } from '../../shared/utils/project-filter';

@Component({
  selector: 'app-resume',
  imports: [Icon],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resume {
  private readonly doc = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly siteHost = SITE_URL.replace('https://', '');
  protected readonly summary = SUMMARY;
  protected readonly roles = EXPERIENCE;
  protected readonly skillGroups = SKILL_GROUPS;
  protected readonly education = EDUCATION;
  protected readonly projects = sortProjects(PROJECTS);

  constructor() {
    inject(SeoService).update({
      title: 'Resume – Hatef Khodkar, Senior Angular Developer',
      description:
        'Resume of Hatef Khodkar: 7+ years of Angular and TypeScript experience across healthcare, logistics and marketplace products. Skills, experience and education.',
      path: '/resume/',
    });
  }

  protected print(): void {
    this.doc.defaultView?.print();
  }
}
