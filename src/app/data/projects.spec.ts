import { PROJECTS } from './projects';

describe('PROJECTS data', () => {
  it('has unique slugs and complete entries', () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const project of PROJECTS) {
      expect(project.title.trim()).not.toBe('');
      expect(project.tags.length).toBeGreaterThan(0);
      if (project.demoUrl !== undefined) {
        expect(project.demoUrl).toMatch(/^https:\/\//);
      }
      expect(project.codeUrl).toBe(`https://github.com/hkhodkar/${project.slug}`);
      expect(project.added).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});
