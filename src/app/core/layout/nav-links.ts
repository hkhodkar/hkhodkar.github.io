export interface SectionLink {
  id: string;
  label: string;
}

export const SECTION_LINKS: readonly SectionLink[] = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
