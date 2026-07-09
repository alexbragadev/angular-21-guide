import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'flux-control', loadComponent: () => import('./components/flux-control/flux-control').then(m => m.FluxControlComponent) }
];
