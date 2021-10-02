import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { PokemonResponse } from 'interfaces/services/pokemonResponse';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private offset: number = 500;
  private limit: number = 50;
  
  constructor(private _http: HttpClient) {}
  
  getPokemons(page: number) {

    this.offset = page * 50;
    let url = `https://pokeapi.co/api/v2/pokemon-form/?offset=${this.offset}&limit=${this.limit}`;

    return this._http.get<PokemonResponse>(url).pipe(
      map((response) => response.results),
      mergeMap((pokemonsList) =>
        from(pokemonsList).pipe(
          concatMap((pokemon) => this._http.get(pokemon.url))
        )
      ),
      delay(1000)
    );
  }
}
