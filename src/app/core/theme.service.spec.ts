import { TestBed } from '@angular/core/testing';

import { THEME_STORAGE_KEY, ThemeService } from './theme.service';

describe('ThemeService', () => {
  const root = document.documentElement;

  beforeEach(() => {
    localStorage.clear();
    root.removeAttribute('data-theme');
  });

  it('uses the saved theme when there is one', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('light');
    expect(root.getAttribute('data-theme')).toBe('light');
  });

  it('toggles the theme, applies it and remembers the choice', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    const service = TestBed.inject(ThemeService);

    service.toggle();
    expect(service.theme()).toBe('light');
    expect(root.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    service.toggle();
    expect(service.theme()).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('ignores invalid stored values', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'purple');
    const service = TestBed.inject(ThemeService);

    expect(['light', 'dark']).toContain(service.theme());
  });
});
