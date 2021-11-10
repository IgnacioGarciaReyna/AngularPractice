import { Component, OnInit } from '@angular/core';
import { Iheroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { delay, map, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroesList: Iheroe[] = [];
  public loading: boolean = false;

  //Indicamos que _heroesService va a ser de tipo HeroesService, por lo tanto heredará todos sus metodos, como getAllHeroes, que creamos nosotros mismos
  constructor(public _heroeService: HeroesService,
    private _router : Router) {
    //El método getAllHeroes devuelve el observable get (que trae el array de heroes), por lo tanto podemos subscribirnos
    this._heroeService
      .getAllHeroes()
      .pipe(
        tap({
          next:() => (this.loading = true),
        }),
        delay(1000),
        map((heroes) => (this.heroesList = heroes)))
      .subscribe({
        complete: () => (this.loading = false),
      });
  }



  ngOnInit(): void {}

  goToViewHeros(nombreHeroe:string) {
    this._router.navigate(['viewhero', nombreHeroe])
  } 


}
