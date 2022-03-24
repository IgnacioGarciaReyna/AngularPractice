import { RouterModule, Routes } from '@angular/router';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { LifeCycle2Component } from './components/life-cycle2/life-cycle2.component';

const routes: Routes = [
    { path: 'lcc', component: LifeCycleComponent },
    { path: 'lcc2', component: LifeCycle2Component },
];

export const appRouting = RouterModule.forRoot(routes);