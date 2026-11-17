import { RenderMode, ServerRoute } from '@angular/ssr';

// Every route is prerendered to static HTML at build time (GitHub Pages has no server).
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
