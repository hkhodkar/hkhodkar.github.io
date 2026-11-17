import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/seo.service';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Icon],
  template: `
    <section class="nf container" aria-labelledby="nf-title">
      <p class="nf__code gradient-text" aria-hidden="true">404</p>
      <h1 id="nf-title">This page doesn't exist</h1>
      <p class="nf__text">The link may be broken or the page may have moved. Here are some places to start instead.</p>
      <div class="nf__actions">
        <a class="btn btn--primary" routerLink="/"><app-icon name="home" /> Back to home</a>
        <a class="btn btn--ghost" routerLink="/resume"><app-icon name="file" /> View resume</a>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .nf {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-block: clamp(72px, 14vw, 160px);
      text-align: center;

      h1 {
        font-size: clamp(1.8rem, 4vw, 2.6rem);
      }
    }
    .nf__code {
      font-family: var(--font-display);
      font-size: clamp(5rem, 18vw, 9rem);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.05em;
    }
    .nf__text {
      max-width: 460px;
      margin-top: 14px;
      color: var(--text-muted);
    }
    .nf__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 32px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  constructor() {
    inject(SeoService).update({
      title: 'Page not found – Hatef Khodkar',
      description: 'The page you are looking for does not exist.',
      path: '/404',
      noindex: true,
    });
  }
}
