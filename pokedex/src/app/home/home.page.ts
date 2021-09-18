import { Component } from '@angular/core';
import { IPokemons } from 'interfaces/home/pokemonHome.interface';
import { PokemonService } from '../services/pokemon/pokemon.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pokemonList: IPokemons[] = [];

  constructor(private _pokemonService: PokemonService) {
    this._pokemonService.getPokemons().subscribe({
      next: (pokemon: IPokemons) => {
        this.pokemonList.push(pokemon);
      }
    }
    );
  }

}
