import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SERVICES } from '../../../../data/profile';
import { Icon } from '../../../../shared/icon/icon';
import { RevealDirective } from '../../../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [Icon, RevealDirective],
  template: `
    <section id="services" class="section" aria-labelledby="services-title">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Services</p>
          <h2 id="services-title">What I can build for you</h2>
          <p>
            From a single feature to a complete product, I take Angular work from idea to production &mdash; with the
            architecture, tests and polish that make it last.
          </p>
        </header>

        <ul class="services">
          @for (service of services; track service.title; let i = $index) {
            <li class="card service" appReveal [revealDelay]="(i % 3) * 80">
              <span class="service__icon"><app-icon [name]="service.icon" /></span>
              <h3>{{ service.title }}</h3>
              <p class="service__text">{{ service.description }}</p>
              <p class="service__proof"><app-icon name="check" />{{ service.proof }}</p>
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
    .services {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      list-style: none;
    }
    .service {
      display: flex;
      flex-direction: column;
      padding: 28px;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0 0 auto;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.7), rgba(34, 211, 238, 0.6), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        border-color: var(--border-strong);
        transform: translateY(-4px);
        box-shadow: var(--shadow);

        &::before {
          opacity: 1;
        }
      }

      h3 {
        margin-top: 20px;
        font-size: 1.2rem;
      }
    }
    .service__icon {
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border-radius: 14px;
      color: #fff;
      background: var(--grad-btn);
      box-shadow: var(--shadow-accent);

      app-icon {
        width: 22px;
        height: 22px;
      }
    }
    .service__text {
      margin-top: 10px;
      color: var(--text-muted);
      font-size: 0.97rem;
    }
    .service__proof {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-top: auto;
      padding-top: 18px;
      color: var(--text-faint);
      font-size: 0.85rem;
      line-height: 1.5;

      app-icon {
        width: 16px;
        height: 16px;
        margin-top: 2px;
        color: var(--success);
      }
    }
    @media (max-width: 959.98px) {
      .services {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (max-width: 620px) {
      .services {
        grid-template-columns: minmax(0, 1fr);
      }
      .service {
        padding: 22px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly services = SERVICES;
}
