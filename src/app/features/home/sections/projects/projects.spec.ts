import { TestBed } from '@angular/core/testing';

import { PROJECTS } from '../../../../data/projects';
import { Projects } from './projects';

describe('Projects section', () => {
  async function render() {
    const fixture = TestBed.createComponent(Projects);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  const cardTitles = (el: HTMLElement) => [...el.querySelectorAll('.project h3')].map((h) => h.textContent?.trim());
  const chip = (el: HTMLElement, label: string) =>
    [...el.querySelectorAll<HTMLButtonElement>('.filter')].find((b) => b.textContent?.trim() === label)!;

  it('shows every project by default with demo and code links', async () => {
    const { el } = await render();

    expect(el.querySelectorAll('.project').length).toBe(PROJECTS.length);
    for (const project of PROJECTS) {
      if (project.demoUrl) {
        expect(el.querySelector(`a.btn[href="${project.demoUrl}"]`)).toBeTruthy();
      }
      expect(el.querySelector(`a[href="${project.codeUrl}"]`)).toBeTruthy();
    }
    expect(chip(el, 'All').getAttribute('aria-pressed')).toBe('true');
  });

  it('filters cards when a tag chip is clicked', async () => {
    const { fixture, el } = await render();

    chip(el, 'jsPDF').click();
    await fixture.whenStable();

    expect(cardTitles(el)).toEqual(['Invoice Generator']);
    expect(chip(el, 'jsPDF').getAttribute('aria-pressed')).toBe('true');
    expect(chip(el, 'All').getAttribute('aria-pressed')).toBe('false');

    chip(el, 'All').click();
    await fixture.whenStable();
    expect(el.querySelectorAll('.project').length).toBe(PROJECTS.length);
  });
});
