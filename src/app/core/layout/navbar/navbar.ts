import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Icon } from '../../../shared/icon/icon';
import { ScrollSpyService } from '../../scroll-spy.service';
import { SectionNavService } from '../../section-nav.service';
import { ThemeService } from '../../theme.service';
import { SECTION_LINKS } from '../nav-links';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly spy = inject(ScrollSpyService);
  private readonly sectionNav = inject(SectionNavService);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  protected readonly links = SECTION_LINKS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const onScroll = () => this.scrolled.set(window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }

  protected goTo(event: MouseEvent, id: string): void {
    this.closeMenu();
    this.sectionNav.handleClick(event, id);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onEscape(): void {
    if (!this.menuOpen()) return;
    this.closeMenu();
    this.menuButton()?.nativeElement.focus();
  }
}
