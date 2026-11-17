import { TestBed } from '@angular/core/testing';

import { PROFILE } from '../../../../core/config';
import { Contact } from './contact';

describe('Contact section', () => {
  afterEach(() => vi.restoreAllMocks());

  it('copies the email address and shows feedback', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });

    const fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    el.querySelector<HTMLButtonElement>('.email__copy')!.click();
    await fixture.whenStable();

    expect(writeText).toHaveBeenCalledWith(PROFILE.email);
    expect(el.querySelector('.email__copy')?.textContent).toContain('Copied!');
    expect(el.querySelector('[role="status"]')?.textContent).toContain('copied');
  });

  it('never shows private details', async () => {
    const fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain(PROFILE.email);
    expect(text).not.toMatch(/\+971|nationality|visa|gender/i);
  });
});
