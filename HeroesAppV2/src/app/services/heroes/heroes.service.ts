import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//Creamos la clase HeroesService que se va a usar en heroes.component.ts
export class HeroesService {
  //Le indicamos que _http va ser de tipo HttpClient, por lo tanto va a heredar
  //todos sus métodos, como por ejemplo get
  constructor(private _http: HttpClient) {}

  //Creamos el método getAllHeroes que luego será utilizado desde heroes.component.ts
  public getAllHeroes() {
    return this._http.get(`/assets/heroes_data.json`);
  }
}
