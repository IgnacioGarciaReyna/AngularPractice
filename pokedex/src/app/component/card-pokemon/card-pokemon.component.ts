import { Component, Input, OnInit } from '@angular/core';
import { IPokemons } from 'interfaces/home/pokemonHome.interface';
import { ColorsPokemonService } from 'src/app/services/color-pokemon/colors-pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon: IPokemons;

  constructor(private _colorPokemonService: ColorsPokemonService) {}

  ngOnInit() {
    console.log(this.pokemon);
  }

  public getColorPokemon() {
    return this._colorPokemonService.getColorPokemon(this.pokemon.types[0].type.name).color;
  }

  public getColorTypesPokemon(typePokemon) {
    return this._colorPokemonService.getColorByTag(typePokemon.type.name).color;
  }
}
