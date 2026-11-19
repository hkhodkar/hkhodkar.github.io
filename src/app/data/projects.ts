/**
 * Portfolio projects. To add one, append an entry below and put a screenshot at
 * public/projects/<slug>.webp (16:10, about 1200x750). See README for details.
 */
export interface Project {
  /** Repository name. Also used for the screenshot file name. */
  slug: string;
  title: string;
  /** One or two sentences shown on the card. */
  summary: string;
  /** Three to four short feature bullets. */
  highlights: string[];
  /** Technologies; each tag becomes a filter chip. */
  tags: string[];
  /** Leave out for projects without a hosted demo (e.g. full-stack apps). */
  demoUrl?: string;
  codeUrl: string;
  /** ISO date (YYYY-MM-DD); newer projects are listed first. */
  added: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'appointment-booking',
    title: 'Appointment Booking',
    summary:
      'Online booking for a small clinic: clients pick a service, a specialist and a free time slot, and the team manages appointments in an admin table and a day/week agenda.',
    highlights: [
      'Calendar and time slots based on real staff availability',
      'Validated booking form with confirmation and .ics export',
      'Admin bookings table with filters, stats and edit dialog',
      'Day and week agenda per specialist, dark mode, mobile layout',
    ],
    tags: ['Angular 21', 'Signals', 'Reactive Forms', 'SCSS'],
    demoUrl: 'https://hkhodkar.github.io/appointment-booking/',
    codeUrl: 'https://github.com/hkhodkar/appointment-booking',
    added: '2026-11-19',
  },
  {
    slug: 'crm-lite',
    title: 'CRM Lite',
    summary:
      'A full-stack mini CRM with contacts, companies, a drag and drop deals pipeline, activity timelines and a KPI dashboard. The live demo runs on built-in sample data; the full stack runs with one docker compose up.',
    highlights: [
      'Deals pipeline with drag and drop stage changes',
      'Activity timeline for calls, emails, meetings and notes',
      'Dashboard with pipeline value, win rate and charts',
      'FastAPI with server-side filters, pytest, Docker and CI',
    ],
    tags: ['Angular 21', 'FastAPI', 'Python', 'SQLite', 'Docker'],
    demoUrl: 'https://hkhodkar.github.io/crm-lite/',
    codeUrl: 'https://github.com/hkhodkar/crm-lite',
    added: '2026-11-18',
  },
  {
    slug: 'kanban-task-board',
    title: 'Kanban Task Board',
    summary:
      'A kanban board for planning work: drag cards between columns and keep track of labels, due dates, assignees and checklists, with everything saved in the browser.',
    highlights: [
      'Drag and drop cards and columns with the Angular CDK',
      'Card dialog with labels, assignee, due date and checklist',
      'Search and filters with overdue and due-soon markers',
      'Demo board, dark mode and a responsive phone layout',
    ],
    tags: ['Angular 21', 'Signals', 'Angular CDK', 'SCSS'],
    demoUrl: 'https://hkhodkar.github.io/kanban-task-board/',
    codeUrl: 'https://github.com/hkhodkar/kanban-task-board',
    added: '2026-11-18',
  },
  {
    slug: 'invoice-generator',
    title: 'Invoice Generator',
    summary:
      'Create professional invoices with a live preview, export them to PDF and track their status, all in the browser with no sign-up.',
    highlights: [
      'Live preview that updates on every keystroke',
      'Text-based A4 PDF export with jsPDF',
      'Draft / sent / paid / overdue statuses',
      'Local persistence with localStorage',
    ],
    tags: ['Angular 21', 'Signals', 'jsPDF', 'SCSS'],
    demoUrl: 'https://hkhodkar.github.io/invoice-generator/',
    codeUrl: 'https://github.com/hkhodkar/invoice-generator',
    added: '2026-11-16',
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    summary:
      'A personal finance dashboard to track transactions, set monthly budgets per category and see where the money goes.',
    highlights: [
      'Transactions with filters, search and pagination',
      'Category budgets with progress warnings',
      'Chart.js dashboard and CSV import / export',
      'Dark mode that remembers your choice',
    ],
    tags: ['Angular 21', 'Signals', 'Chart.js', 'SCSS'],
    demoUrl: 'https://hkhodkar.github.io/expense-tracker/',
    codeUrl: 'https://github.com/hkhodkar/expense-tracker',
    added: '2026-11-16',
  },
];

export function projectImage(project: Project): string {
  return `/projects/${project.slug}.webp`;
}
