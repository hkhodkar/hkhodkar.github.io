import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject } from '@angular/core';

import { ScrollSpyService } from '../../core/scroll-spy.service';
import { SeoService } from '../../core/seo.service';
import { SECTION_LINKS } from '../../core/layout/nav-links';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Projects, Experience, Skills, Contact],
  template: `
    <app-hero />
    <app-services />
    <app-projects />
    <app-experience />
    <app-skills />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  constructor() {
    inject(SeoService).update({
      title: 'Hatef Khodkar – Senior Angular Developer for Hire',
      description:
        'Senior Angular Developer in Dubai with 7+ years building fast, reliable web apps, dashboards and admin panels. Available for freelance Angular and full-stack projects.',
      path: '/',
    });

    const spy = inject(ScrollSpyService);
    afterNextRender(() => spy.watch(SECTION_LINKS.map((link) => link.id)));
    inject(DestroyRef).onDestroy(() => spy.stop());
  }
}
