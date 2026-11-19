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
    slug: 'multi-step-form-wizard',
    title: 'Multi-step Form Wizard',
    summary:
      'A form engine that turns a JSON schema into a multi-step wizard with typed reactive forms, conditional fields and steps, cross-field and async validation, a review step and draft autosave. Three example forms come with a live schema viewer.',
    highlights: [
      'Forms and steps built from JSON, including repeatable groups',
      'Conditional fields and steps, cross-field and async validators',
      'Accessible stepper, review step with edit links',
      'Draft autosave with resume or start over',
    ],
    tags: ['Angular 21', 'Signals', 'Reactive Forms', 'RxJS'],
    demoUrl: 'https://hkhodkar.github.io/multi-step-form-wizard/',
    codeUrl: 'https://github.com/hkhodkar/multi-step-form-wizard',
    added: '2026-11-19',
  },
  {
    slug: 'real-estate-listings',
    title: 'Real Estate Listings',
    summary:
      'A property search app with 30 homes for sale across five UAE cities. Browse in a grid, list or map view, open a property with a photo gallery, amenities and a location map, contact the agent and keep favorites in the browser.',
    highlights: [
      'Filters and sort kept in the URL, shareable and reload-safe',
      'Leaflet map with price markers, popups and auto-fit to results',
      'Property page with full-screen gallery and contact form',
      'Favorites saved in localStorage with undo',
    ],
    tags: ['Angular 21', 'Signals', 'Leaflet', 'SCSS'],
    demoUrl: 'https://hkhodkar.github.io/real-estate-listings/',
    codeUrl: 'https://github.com/hkhodkar/real-estate-listings',
    added: '2026-11-19',
  },
  {
    slug: 'auth-starter',
    title: 'Auth Starter',
    summary:
      'A full-stack authentication starter: FastAPI issues short-lived JWT access tokens and rotating refresh tokens over Argon2-hashed passwords, and the Angular app uses a refreshing HTTP interceptor and role guards. The live demo runs on built-in sample data with 60-second tokens so you can watch a refresh happen.',
    highlights: [
      'Interceptor that refreshes once on 401 and retries queued requests',
      'Rotating refresh tokens, reuse detection and server-side logout',
      'Route guards and role-based UI for admin and user',
      'Admin users page, profile and password change, pytest and CI',
    ],
    tags: ['Angular 21', 'FastAPI', 'Python', 'JWT', 'Docker'],
    demoUrl: 'https://hkhodkar.github.io/auth-starter/',
    codeUrl: 'https://github.com/hkhodkar/auth-starter',
    added: '2026-11-19',
  },
  {
    slug: 'ecommerce-storefront',
    title: 'E-commerce Storefront',
    summary:
      'A small online shop with 28 products across six categories, searchable and filterable through shareable URLs. Shoppers pick colors and sizes, manage a cart saved in the browser and finish a fully validated checkout with an order confirmation.',
    highlights: [
      'URL-driven catalog filters, search and sorting',
      'Signals cart store with promo codes, synced across tabs',
      'Typed checkout form with card, expiry and postal code checks',
      'Product detail with color and size variants and related items',
    ],
    tags: ['Angular 21', 'Signals', 'Reactive Forms', 'SCSS'],
    demoUrl: 'https://hkhodkar.github.io/ecommerce-storefront/',
    codeUrl: 'https://github.com/hkhodkar/ecommerce-storefront',
    added: '2026-11-19',
  },
  {
    slug: 'admin-users-table',
    title: 'Admin Users Table',
    summary:
      'A user management screen for an admin console with server-side paging, sorting and filters, bulk actions and CSV export. The live demo runs on built-in sample data; the full stack runs with docker compose.',
    highlights: [
      'Server-side paging, multi-column sorting and filters',
      'Shareable URLs for every search, filter and sort',
      'Bulk activate, deactivate, change role and delete',
      'FastAPI with CSV export, pytest, Docker and CI',
    ],
    tags: ['Angular 21', 'FastAPI', 'Python', 'SQLite', 'Docker'],
    demoUrl: 'https://hkhodkar.github.io/admin-users-table/',
    codeUrl: 'https://github.com/hkhodkar/admin-users-table',
    added: '2026-11-19',
  },
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
