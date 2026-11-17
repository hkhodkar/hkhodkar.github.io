import { Project } from '../../data/projects';

export const ALL_TAG = 'All';

/** Newest first; projects added on the same day keep their order in the data file. */
export function sortProjects(projects: readonly Project[]): Project[] {
  return projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => b.project.added.localeCompare(a.project.added) || a.index - b.index)
    .map(({ project }) => project);
}

/** Unique tags, most used first, ties in order of first appearance. */
export function collectTags(projects: readonly Project[]): string[] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const tag of project.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([tag]) => tag);
}

export function filterProjects(projects: readonly Project[], tag: string): Project[] {
  if (!tag || tag === ALL_TAG) return [...projects];
  return projects.filter((project) => project.tags.includes(tag));
}
