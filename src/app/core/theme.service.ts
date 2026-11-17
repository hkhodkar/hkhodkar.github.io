import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly current = signal<Theme>(this.resolveInitial());
  readonly theme = this.current.asReadonly();

  constructor() {
    if (!this.isBrowser) return;
    this.apply(this.current());

    // Follow the OS setting until the visitor picks a theme explicitly.
    const media = this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: light)');
    media?.addEventListener?.('change', (event) => {
      if (!this.readStored()) this.setTheme(event.matches ? 'light' : 'dark', false);
    });
  }

  toggle(): void {
    this.setTheme(this.current() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme, persist = true): void {
    this.current.set(theme);
    this.apply(theme);
    if (persist && this.isBrowser) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch {
        // Storage can be blocked (private mode); the theme still applies for this visit.
      }
    }
  }

  private resolveInitial(): Theme {
    if (!this.isBrowser) return 'dark';
    const stored = this.readStored();
    if (stored) return stored;
    const prefersLight = this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  private readStored(): Theme | null {
    try {
      const value = localStorage.getItem(THEME_STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  private apply(theme: Theme): void {
    if (!this.isBrowser) return;
    this.doc.documentElement.setAttribute('data-theme', theme);
    this.doc.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#060914' : '#f6f7fb');
  }
}
