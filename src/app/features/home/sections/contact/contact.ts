import { ChangeDetectionStrategy, Component, DOCUMENT, DestroyRef, inject, signal } from '@angular/core';

import { PROFILE, UPWORK_URL } from '../../../../core/config';
import { Icon } from '../../../../shared/icon/icon';
import { RevealDirective } from '../../../../shared/reveal.directive';
import { copyText } from '../../../../shared/utils/clipboard';

type CopyState = 'idle' | 'copied' | 'failed';

@Component({
  selector: 'app-contact',
  imports: [Icon, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly doc = inject(DOCUMENT);
  private resetTimer?: ReturnType<typeof setTimeout>;

  protected readonly profile = PROFILE;
  protected readonly upworkUrl = UPWORK_URL;
  protected readonly copyState = signal<CopyState>('idle');

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    const ok = await copyText(this.profile.email, this.doc);
    this.copyState.set(ok ? 'copied' : 'failed');
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copyState.set('idle'), 2500);
  }
}
