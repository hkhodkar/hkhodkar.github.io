import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXPERIENCE } from '../../../../data/profile';
import { Icon } from '../../../../shared/icon/icon';
import { RevealDirective } from '../../../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RouterLink, Icon, RevealDirective],
  template: `
    <section id="experience" class="section" aria-labelledby="experience-title">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Experience</p>
          <h2 id="experience-title">Where I've made an impact</h2>
          <p>
            7+ years shipping production front ends for healthcare, logistics and marketplace products &mdash; from
            greenfield platforms to large migrations.
          </p>
        </header>

        <ol class="timeline">
          @for (role of roles; track role.company + role.period; let first = $first) {
            <li class="entry" [class.entry--current]="first" appReveal>
              <span class="entry__dot" aria-hidden="true"></span>
              <div class="entry__when">
                <span class="entry__period">{{ role.period }}</span>
                <span class="entry__location">{{ role.location }}</span>
              </div>
              <article class="card entry__card">
                <header class="entry__head">
                  <h3>{{ role.title }}</h3>
                  <p class="entry__company">
                    {{ role.company }}
                    @if (role.domain) {
                      <span class="chip">{{ role.domain }}</span>
                    }
                  </p>
                </header>
                @if (role.intro) {
                  <p class="entry__intro">{{ role.intro }}</p>
                }
                <ul class="entry__list">
                  @for (item of role.highlights.slice(0, 3); track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </article>
            </li>
          }
        </ol>

        <div class="more" appReveal>
          <a class="btn btn--ghost" routerLink="/resume">
            <app-icon name="file" /> View full resume <app-icon name="arrow-right" />
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly roles = EXPERIENCE;
}
