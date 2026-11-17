import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject } from '@angular/core';

import { ScrollSpyService } from '../../core/scroll-spy.service';
import { SeoService } from '../../core/seo.service';
import { SECTION_LINKS } from '../../core/layout/nav-links';
import { Hero } from './sections/hero/hero';
import { Services } from './sections/services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  template: `
    <app-hero />
    <app-services />
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
