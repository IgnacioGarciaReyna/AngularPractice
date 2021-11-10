import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { filter, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { Iheroe } from 'src/app/interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})

//Creamos la clase HeroesService que se va a usar en heroes.component.ts
export class HeroesService {
  //Le indicamos que _http va ser de tipo HttpClient, por lo tanto va a heredar
  //todos sus métodos, como por ejemplo get
  constructor(
    private _http: HttpClient,
    private _activatedRoute: ActivatedRoute
  ) {}

  //Creamos el método getAllHeroes que luego será utilizado desde heroes.component.ts

  /**
   *
   * @returns este metodo retorna un arreglo de heroes
   */
  public getAllHeroes(): Observable<Iheroe[]> {
    return this._http.get<Iheroe[]>(`/assets/heroes_data.json`);
  }

  // public heroes(): Observable<Iheroe[]> {
  //   return this.getAllHeroes()
  //   .pipe(
  //     map((heroes) => (this.heroesList = heroes)))
  //   .subscribe();
  // }

  /**
   *
   * @param nombre nombre del heroe a mostrar
   * @returns en caso de existir te regresa el objeto del heroe sino, undefined
   */
  public GetHeroe(nombre: string): Observable<Iheroe | undefined> {
    return this.getAllHeroes().pipe(
      map((heroeList) =>
        heroeList.find(
          (heroe) => heroe.nombre.toLowerCase() == nombre.toLowerCase()
        )
      )
    );
  }

  public getHeroesByName(name: string) {
    return this.getAllHeroes().pipe(
      map((heroeList) =>
        heroeList.filter((heroe) =>
          heroe.nombre.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }

  /**
   *
   * @returns el array con los nombres de los heroes en strings
   */
  public getAllNamesHeroes(): Observable<string[]> {
    return this.getAllHeroes().pipe(
      map<Iheroe[], string[]>((heroeList) => {
        let heroeNameList: string[] = [];
        heroeList.forEach((heroe) => heroeNameList.push(heroe.nombre));
        return heroeNameList;
      })
    );
  }
}
