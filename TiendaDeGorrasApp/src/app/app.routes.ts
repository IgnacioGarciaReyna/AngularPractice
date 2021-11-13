import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const appRouting = RouterModule.forRoot(routes);
