import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, delay, map, mergeMap, pluck } from 'rxjs/operators';
import { PokemonResponse } from 'interfaces/services/pokemonResponse';
import { from, Observable } from 'rxjs';

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
      pluck('results'),
      concatMap((pokemonList) =>
        from(pokemonList).pipe(
          concatMap((pokemon) => this._http.get(pokemon.url))
        )
      )
    );
  }

  getPokemonByName(termino: string): Observable<PokemonResponse> {
    let url = `http://pokeapi.co/api/v2/pokemon/${termino}`;
    return this._http.get<PokemonResponse>(url);
  }
}
