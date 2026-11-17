import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

/** Scrolls to a home page section, navigating to the home page first when needed. */
@Injectable({ providedIn: 'root' })
export class SectionNavService {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  /** Handles a click on a section link. Lets modified clicks (new tab etc.) through. */
  handleClick(event: MouseEvent, id: string): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    this.goTo(id);
  }

  goTo(id: string): void {
    const onHome = this.router.url.split('#')[0].split('?')[0] === '/';
    if (!onHome) {
      void this.router.navigate(['/'], { fragment: id === 'top' ? undefined : id });
      return;
    }

    const win = this.doc.defaultView;
    const smooth = !win?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = smooth ? 'smooth' : 'auto';
    if (id === 'top') {
      win?.scrollTo({ top: 0, behavior });
      this.location.replaceState('/');
      return;
    }
    this.doc.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
    this.location.replaceState('/#' + id);
  }
}
