import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './components/about/about';
import { WorkshopsComponent } from './components/workshops/workshops';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: '**', redirectTo: '' },
];

// ✅ Usa RouterModule.forRoot con scroll restaurado
export const AppRoutingModule = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled', // vuelve al top en cada navegación
  anchorScrolling: 'enabled',           // habilita #anclas en la url
});
