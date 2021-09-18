import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, mergeMap } from 'rxjs/operators';
import { PokemonResponse } from 'interfaces/services/pokemonResponse';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private _http: HttpClient) {}

  getPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=50';

    return this._http.get<PokemonResponse>(url).pipe(
      map((response) => response.results),
      mergeMap((pokemonsList) =>
        from(pokemonsList).pipe(
          concatMap((pokemon) => this._http.get(pokemon.url))
        )
      )
    );
  }
}
