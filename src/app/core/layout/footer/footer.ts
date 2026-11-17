import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../../shared/icon/icon';
import { PROFILE } from '../../config';
import { SectionNavService } from '../../section-nav.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon],
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__mark" aria-hidden="true">HK</span>
          <div>
            <p class="footer__name">{{ profile.name }}</p>
            <p class="footer__meta">{{ profile.title }} · {{ profile.location }}</p>
          </div>
        </div>
        <nav class="footer__links" aria-label="Footer">
          <a routerLink="/resume">Resume</a>
          <a href="/#contact" (click)="sectionNav.handleClick($event, 'contact')">Contact</a>
          <a class="footer__icon" [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub profile">
            <app-icon name="github" />
          </a>
          <a class="footer__icon" [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn profile">
            <app-icon name="linkedin" />
          </a>
          <a class="footer__icon" [href]="'mailto:' + profile.email" aria-label="Send an email">
            <app-icon name="mail" />
          </a>
        </nav>
      </div>
      <div class="container">
        <p class="footer__copy">© {{ year }} {{ profile.name }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly sectionNav = inject(SectionNavService);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
