import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const appRouting = RouterModule.forRoot(routes);
