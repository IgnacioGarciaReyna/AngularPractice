import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  //Indicamos que _heroesService va a ser de tipo HeroesService, por lo tanto
  //heredará todos sus metodos, como getAllHeroes, que creamos nosotros mismos
  constructor(private _heroeService: HeroesService) {
    //El método getAllHeroes devuelve el observable get (que trae el array de heroes), 
    //por lo tanto podemos subscribirnos
    this._heroeService.getAllHeroes().subscribe(console.log);
  }

  ngOnInit(): void {}
}
