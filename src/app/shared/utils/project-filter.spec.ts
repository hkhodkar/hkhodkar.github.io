import { Project } from '../../data/projects';
import { ALL_TAG, collectTags, filterProjects, sortProjects } from './project-filter';

const make = (slug: string, tags: string[], added = '2026-01-01'): Project => ({
  slug,
  title: slug,
  summary: '',
  highlights: [],
  tags,
  demoUrl: `https://example.com/${slug}/`,
  codeUrl: `https://github.com/example/${slug}`,
  added,
});

describe('project filter', () => {
  const projects = [
    make('a', ['Angular', 'jsPDF']),
    make('b', ['Angular', 'Chart.js']),
    make('c', ['React', 'Chart.js']),
  ];

  it('returns every project for the "All" tag', () => {
    expect(filterProjects(projects, ALL_TAG).map((p) => p.slug)).toEqual(['a', 'b', 'c']);
  });

  it('returns only projects that use the selected tag', () => {
    expect(filterProjects(projects, 'Chart.js').map((p) => p.slug)).toEqual(['b', 'c']);
    expect(filterProjects(projects, 'jsPDF').map((p) => p.slug)).toEqual(['a']);
    expect(filterProjects(projects, 'Vue')).toEqual([]);
  });

  it('collects unique tags, most used first', () => {
    expect(collectTags(projects)).toEqual(['Angular', 'Chart.js', 'jsPDF', 'React']);
  });

  it('sorts newest first and keeps file order for equal dates', () => {
    const list = [make('old', [], '2025-05-01'), make('x', [], '2026-02-01'), make('y', [], '2026-02-01')];
    expect(sortProjects(list).map((p) => p.slug)).toEqual(['x', 'y', 'old']);
  });
});
