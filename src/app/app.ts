import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Footer } from './core/layout/footer/footer';
import { Navbar } from './core/layout/navbar/navbar';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <a class="skip-link" href="#main" (click)="skipToMain($event)">Skip to content</a>
    <div class="bg-decor" aria-hidden="true">
      <div class="bg-decor__grid"></div>
      <div class="bg-decor__glow bg-decor__glow--one"></div>
      <div class="bg-decor__glow bg-decor__glow--two"></div>
    </div>
    <app-navbar />
    <main #main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: `
    :host {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      position: relative;
      flex: 1;
      outline: none;
    }
    .bg-decor {
      position: absolute;
      inset: 0 0 auto;
      height: 1100px;
      max-height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
    .bg-decor__grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
      background-size: 56px 56px;
      background-position: center top;
      -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 0%, #000 35%, transparent 100%);
      mask-image: radial-gradient(ellipse 75% 65% at 50% 0%, #000 35%, transparent 100%);
    }
    .bg-decor__glow {
      position: absolute;
      border-radius: 50%;
    }
    .bg-decor__glow--one {
      top: -360px;
      left: 50%;
      width: 900px;
      height: 760px;
      transform: translateX(-62%);
      background: radial-gradient(closest-side, var(--glow-1), transparent);
    }
    .bg-decor__glow--two {
      top: 40px;
      right: -260px;
      width: 680px;
      height: 620px;
      background: radial-gradient(closest-side, var(--glow-2), transparent);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  constructor() {
    // Instantiate early so the saved theme and system listener are active on every page.
    inject(ThemeService);
    // Keep anchor targets clear of the sticky navbar.
    inject(ViewportScroller).setOffset([0, 72]);
  }

  // With <base href="/"> a plain "#main" link would navigate to the home page, so move focus manually.
  protected skipToMain(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }
}
