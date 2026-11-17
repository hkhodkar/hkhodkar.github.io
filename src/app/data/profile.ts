import { IconName } from '../shared/icon/icon';

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  proof: string;
}

export interface Role {
  title: string;
  company: string;
  domain?: string;
  location: string;
  period: string;
  intro?: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export const SUMMARY =
  'Front End Developer with 7+ years of experience building enterprise-scale, responsive web applications with Angular ' +
  '(v11–v21), React, TypeScript, HTML5 and CSS3/SCSS in regulated environments (healthcare, logistics). Currently leading ' +
  'frontend development of a greenfield Electronic Data Capture (EDC) platform for clinical research, including a dynamic ' +
  'form builder, an ePRO module for patient-reported outcomes, study workflow automation, role-based interfaces and ' +
  'real-time dashboards. Solid track record of translating UX/UI designs into clean, reusable code, integrating with ' +
  'RESTful APIs and microservice back ends, and applying state management (NgRx, Signals, Redux) at scale. Hands-on ' +
  'with automated testing (Playwright, Cypress, Jasmine, Vitest) and with AI-assisted development using Claude Code, ' +
  'including internal tooling (custom skills, rules and hooks) that standardises how the team builds and reviews code. ' +
  'Also available for freelance Angular and full-stack (Angular + Python/FastAPI) projects.';

export const STATS: Stat[] = [
  { value: '7+', label: 'Years building production web apps' },
  { value: 'v11–v21', label: 'Angular versions shipped' },
  { value: '40+', label: 'Microservices integrated' },
  { value: 'Healthcare', label: '& logistics, regulated enterprise domains' },
];

export const SERVICES: Service[] = [
  {
    icon: 'dashboard',
    title: 'Angular web apps & dashboards',
    description:
      'Responsive, data-rich single-page apps and real-time dashboards built with Angular, Signals and RxJS.',
    proof: 'Real-time study dashboards for a clinical research platform',
  },
  {
    icon: 'users',
    title: 'Admin panels & CRMs',
    description:
      'Role-based admin panels, CRMs and internal tools with complex forms, tables and approval workflows.',
    proof: 'CRM supporting operations across 10 company branches',
  },
  {
    icon: 'refresh',
    title: 'AngularJS → Angular migrations',
    description:
      'Move legacy AngularJS or older Angular versions to modern Angular step by step, without freezing delivery.',
    proof: 'Led an admin panel migration from AngularJS to Angular',
  },
  {
    icon: 'zap',
    title: 'Performance, SSR & SEO',
    description:
      'Faster first loads with SSR or prerendering, lazy loading and bundle tuning, so pages rank and feel instant.',
    proof: 'SSR migration that improved SEO performance by 70%',
  },
  {
    icon: 'shield',
    title: 'Testing with Playwright & Cypress',
    description:
      'End-to-end, integration and unit tests that catch regressions early and keep every release safe to ship.',
    proof: 'Set up a Playwright E2E framework from scratch',
  },
  {
    icon: 'layers',
    title: 'Full-stack with FastAPI',
    description:
      'Angular front ends paired with Python/FastAPI back ends and clean REST APIs for complete, deployable products.',
    proof: 'Integrated front ends with 40+ RESTful microservices',
  },
];

export const EXPERIENCE: Role[] = [
  {
    title: 'Front End Developer',
    company: 'Huma',
    domain: 'Digital Health',
    location: 'London, United Kingdom (Remote)',
    period: 'Dec 2024 – Present',
    intro:
      'Lead frontend developer on a greenfield Electronic Data Capture (EDC) platform – a clinical study management system covering study design, data-collection forms, patient-reported outcomes (ePRO), participant data entry and verification, and trial monitoring.',
    highlights: [
      'Architected the Angular frontend of the EDC platform from the ground up, delivering study creation, surveys, randomization, participant management and real-time study dashboards.',
      'Built a dynamic form builder for clinical data collection with conditional visibility, field dependencies, validation rules, a formula/calculation field engine and clinical data types such as partial dates.',
      'ePRO module: delivered electronic patient-reported outcomes end to end – a survey package builder for study teams, public survey pages that participants open from an invitation link, step-by-step navigation with live progress, option groups, read-only and locked states, and a completion flow that notifies the study team.',
      'Secured the participant-facing experience with dedicated route guards that keep public survey routes separate from the authenticated staff application.',
      'Built the participant data-entry card: sign and lock at form, visit and participant level, SDV plans, missing/blocked states and reason-for-change capture that feeds the audit trail.',
      'Developed study workflow automation (status transitions, scheduled activities, notifications) and implemented role-aware interfaces so sponsors, monitors and site staff each see the data and actions appropriate to their role.',
      'Set up an end-to-end testing framework with Playwright and raised unit test coverage across shared SDKs using Jasmine.',
      'Drove team-wide adoption of Claude Code: authored reusable skills for repetitive tasks, plus project rules and hooks that enforce coding conventions in AI-assisted development and code review.',
      'Worked closely with backend, product and UX/UI teams to turn Figma designs into production features in an Agile environment.',
    ],
  },
  {
    title: 'Front End Developer',
    company: 'Snapp Box',
    domain: 'Logistics',
    location: 'Tehran, Iran',
    period: 'Dec 2022 – Dec 2024',
    highlights: [
      'Redesigned complex business logic with NgRx state management, improving code maintainability and application performance.',
      'Engineered a map failover system that automatically switches to Leaflet when Mapbox is unavailable, keeping the user experience uninterrupted.',
      'Partnered with a cross-functional team of 10 to launch a new product line, contributing to a 20% increase in sales.',
      'Built and launched a corporate panel using React 18, Redux Toolkit and React Query.',
      'Integrated front-end components with a microservice back end of 40+ RESTful services, ensuring seamless data flow.',
      'Authored end-to-end and integration tests with Cypress to validate complex logistics workflows.',
    ],
  },
  {
    title: 'Front End Developer',
    company: 'Otaghak.com',
    domain: 'Online Marketplace',
    location: 'Tehran, Iran',
    period: 'Oct 2021 – Dec 2022',
    highlights: [
      'Developed and maintained an online marketplace for short-term rentals covering 3,000+ properties nationwide.',
      'Migrated a client-side rendered app to Server-Side Rendering (SSR), improving SEO performance by 70%.',
      'Led implementation of the front-end architecture, middleware and service layers with the engineering team.',
      'Implemented a customer feedback system that improved satisfaction scores by 15%, and marketing-driven features that increased online engagement by 40%.',
    ],
  },
  {
    title: 'Front End Developer',
    company: 'Bre-line',
    location: 'Tehran, Iran',
    period: 'May 2020 – Oct 2021',
    highlights: [
      'Engineered a CRM application with AngularJS supporting operations across 10 company branches.',
      'Directed the migration of an admin panel from AngularJS to Angular v11, significantly improving performance.',
      'Integrated SignalR for real-time notifications and live updates across the platform.',
      'Designed and optimized 100+ reusable components, applying Domain-Driven Design with comprehensive unit testing.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Royal Shop',
    location: 'Tehran, Iran',
    period: 'Aug 2019 – May 2020',
    highlights: [
      'Built dynamic, responsive, cross-browser compatible web pages with HTML, CSS, jQuery and JavaScript.',
      'Developed RESTful APIs with .NET Core, server-side views via MVC, and SQL stored procedures.',
      'Analyzed and translated 30+ user requirements into technical designs and performance-oriented solutions.',
    ],
  },
  {
    title: 'System Administrator',
    company: 'Rasaneh ARA',
    domain: 'Newspaper',
    location: 'Tehran, Iran',
    period: 'Jun 2016 – Jun 2019',
    highlights: [
      'Installed, configured and maintained Active Directory on Windows Server 2012, including users, groups and domain policies.',
      'Monitored network infrastructure for high availability and security; managed backups with Veeam Backup & Replication.',
      'Implemented site-to-site VPN connections using Kerio Control for secure inter-office communication.',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Front End',
    skills: [
      'Angular (v11–v21)',
      'React 18',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'SCSS',
      'RxJS',
      'Angular Signals',
      'NgRx',
      'Redux Toolkit',
      'React Query',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    name: 'Architecture',
    skills: [
      'Enterprise-scale frontend architecture',
      'Modular design',
      'Reusable component libraries',
      'Dynamic forms / form builders',
      'RBAC',
      'Workflow automation',
    ],
  },
  {
    name: 'UI / UX',
    skills: [
      'Responsive design',
      'Cross-browser compatibility',
      'Material Design 3',
      'Design systems',
      'Figma to code',
      'Accessibility',
      'PWA',
      'SSR',
    ],
  },
  {
    name: 'Integration',
    skills: ['RESTful APIs', 'Secure APIs', 'Microservices (40+ services)', 'SignalR (real-time)', 'Python / FastAPI basics'],
  },
  {
    name: 'Testing',
    skills: ['Playwright (E2E)', 'Cypress', 'Jasmine', 'Karma', 'Vitest', 'Integration testing', 'TDD'],
  },
  {
    name: 'AI-Assisted Dev',
    skills: [
      'Claude / Claude Code (custom skills, hooks, project rules)',
      'Cursor',
      'GitHub Copilot',
      'Code generation & refactoring',
      'AI-assisted code review',
      'Prompt engineering',
    ],
  },
  {
    name: 'Tools / DevOps',
    skills: ['Git', 'GitHub Actions', 'Docker', 'Jenkins', 'CI/CD pipelines'],
  },
  {
    name: 'Methodologies',
    skills: ['Agile', 'Scrum', 'Code review', 'Coding standards', 'Cross-functional collaboration'],
  },
];

export const EDUCATION = {
  degree: 'B.Eng. Telecommunication Engineering',
  school: 'Alame Feiz Kashani University, Kashan, Iran',
  period: '2009 – 2013',
};
