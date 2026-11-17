import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SKILL_GROUPS } from '../../../../data/profile';
import { RevealDirective } from '../../../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section" aria-labelledby="skills-title">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Skills</p>
          <h2 id="skills-title">Tools I use to deliver</h2>
          <p>A modern Angular toolkit, backed by solid architecture, testing and delivery practices.</p>
        </header>

        <ul class="groups">
          @for (group of groups; track group.name; let i = $index) {
            <li class="card group" [class.group--primary]="i === 0" appReveal [revealDelay]="(i % 4) * 60">
              <h3>{{ group.name }}</h3>
              <ul class="chip-list">
                @for (skill of group.skills; track skill) {
                  <li class="chip">{{ skill }}</li>
                }
              </ul>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .groups {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      list-style: none;
    }
    .group {
      padding: 24px;

      h3 {
        margin-bottom: 16px;
        font-size: 1.05rem;
      }

      &:hover {
        border-color: var(--border-strong);
      }
    }
    .group--primary {
      grid-column: span 2;
      background:
        radial-gradient(120% 140% at 0% 0%, rgba(99, 102, 241, 0.14), transparent 60%),
        var(--surface);

      .chip {
        color: var(--text);
        font-size: 0.86rem;
        padding: 5px 13px;
      }
    }
    @media (max-width: 959.98px) {
      .groups {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (max-width: 620px) {
      .groups {
        grid-template-columns: minmax(0, 1fr);
      }
      .group--primary {
        grid-column: auto;
      }
      .group {
        padding: 20px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
