import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App], providers: [provideRouter([])] });
  });

  it('renders the navbar with every section link and the resume link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = [...(fixture.nativeElement as HTMLElement).querySelectorAll('.nav__link')].map((a) =>
      a.getAttribute('href'),
    );

    expect(links).toEqual(['/#services', '/#projects', '/#experience', '/#skills', '/#contact', '/resume']);
  });

  it('opens and closes the mobile menu', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const toggle = el.querySelector<HTMLButtonElement>('.nav__toggle')!;

    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelector('.nav__menu--open')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
