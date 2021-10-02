import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioPokemonPage } from './bio-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: BioPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioPokemonPageRoutingModule {}
