import { Routes } from '@angular/router';

const notFound = () => import('./features/not-found/not-found').then((m) => m.NotFound);

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home').then((m) => m.Home) },
  { path: 'resume', loadComponent: () => import('./features/resume/resume').then((m) => m.Resume) },
  // Prerendered so it can be copied to 404.html for GitHub Pages.
  { path: '404', loadComponent: notFound },
  { path: '**', loadComponent: notFound },
];
