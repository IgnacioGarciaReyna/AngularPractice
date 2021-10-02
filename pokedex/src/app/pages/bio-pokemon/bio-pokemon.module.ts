import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioPokemonPageRoutingModule } from './bio-pokemon-routing.module';

import { BioPokemonPage } from './bio-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioPokemonPageRoutingModule
  ],
  declarations: [BioPokemonPage]
})
export class BioPokemonPageModule {}
