import { RouterModule, Routes } from '@angular/router';
import { CodeudorComponent } from 'src/app/components/codeudor/codeudor.component';
import { DeudorComponent } from 'src/app/components/deudor/deudor.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'deudor', component: DeudorComponent },
    { path: 'codeudor', component: CodeudorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);