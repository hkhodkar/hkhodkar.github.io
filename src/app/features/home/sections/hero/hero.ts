import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PROFILE, UPWORK_URL } from '../../../../core/config';
import { SectionNavService } from '../../../../core/section-nav.service';
import { STATS } from '../../../../data/profile';
import { Icon } from '../../../../shared/icon/icon';
import { RevealDirective } from '../../../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [Icon, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly sectionNav = inject(SectionNavService);
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;
  protected readonly upworkUrl = UPWORK_URL;
}
