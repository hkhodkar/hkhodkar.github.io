import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

/** Tracks which home page section is currently in view, for the navbar highlight. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly doc = inject(DOCUMENT);
  private teardown?: () => void;

  readonly active = signal('');

  watch(ids: readonly string[]): void {
    this.stop();
    const win = this.doc.defaultView;
    if (!win) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = win.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = this.doc.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom = win.innerHeight + win.scrollY >= this.doc.documentElement.scrollHeight - 2;
      if (atBottom && ids.length) current = ids[ids.length - 1];
      this.active.set(current);
    };
    const schedule = () => {
      if (!frame) frame = win.requestAnimationFrame(update);
    };

    win.addEventListener('scroll', schedule, { passive: true });
    win.addEventListener('resize', schedule, { passive: true });
    update();

    this.teardown = () => {
      win.removeEventListener('scroll', schedule);
      win.removeEventListener('resize', schedule);
      if (frame) win.cancelAnimationFrame(frame);
      this.active.set('');
    };
  }

  stop(): void {
    this.teardown?.();
    this.teardown = undefined;
  }
}
