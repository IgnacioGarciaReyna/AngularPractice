import { Injectable } from '@angular/core';
import {
  IpokemonColors,
  pokemonTypes,
} from 'interfaces/services/pokemoncolors.interface';

@Injectable({
  providedIn: 'root',
})
export class ColorsPokemonService {
  private colorpokemons: IpokemonColors[] = [
    {
      type: pokemonTypes.GRASS,
      color: '#78C850',
    },
    {
      type: pokemonTypes.STEEL,
      color: '#A8A8C0',
    },
    {
      type: pokemonTypes.WATER,
      color: '#3899F8',
    },
    {
      type: pokemonTypes.BUG,
      color: '#A8B820',
    },
    {
      type: pokemonTypes.DRAGON,
      color: '#7860E0',
    },
    {
      type: pokemonTypes.ELECTRIC,
      color: '#F8D030',
    },
    {
      type: pokemonTypes.GHOST,
      color: '#6060B0',
    },
    {
      type: pokemonTypes.FIRE,
      color: '#F05030',
    },
    {
      type: pokemonTypes.FAIRY,
      color: '#E79FE7',
    },
    {
      type: pokemonTypes.ICE,
      color: '#58C8E0',
    },
    {
      type: pokemonTypes.FIGHTING,
      color: '#A05038',
    },
    {
      type: pokemonTypes.NORMAL,
      color: '#A8A090',
    },
    {
      type: pokemonTypes.PSYCHIC,
      color: '#F870A0',
    },
    {
      type: pokemonTypes.ROCK,
      color: '#B8A058',
    },
    {
      type: pokemonTypes.DARK,
      color: '#7A5848',
    },
    {
      type: pokemonTypes.GROUND,
      color: '#E9D6A4',
    },
    {
      type: pokemonTypes.POISON,
      color: '#B058A0',
    },
    {
      type: pokemonTypes.FLYING,
      color: '#98A8F0',
    },
  ];

  private colorTagsTypes: IpokemonColors[] = [
    {
      type: pokemonTypes.GRASS,
      color: '#78C850',
    },
    {
      type: pokemonTypes.STEEL,
      color: '#A8A8C0',
    },
    {
      type: pokemonTypes.WATER,
      color: '#3899F8',
    },
    {
      type: pokemonTypes.BUG,
      color: '#A8B820',
    },
    {
      type: pokemonTypes.DRAGON,
      color: '#7860E0',
    },
    {
      type: pokemonTypes.ELECTRIC,
      color: '#F8D030',
    },
    {
      type: pokemonTypes.GHOST,
      color: '#6060B0',
    },
    {
      type: pokemonTypes.FIRE,
      color: '#F05030',
    },
    {
      type: pokemonTypes.FAIRY,
      color: '#E79FE7',
    },
    {
      type: pokemonTypes.ICE,
      color: '#58C8E0',
    },
    {
      type: pokemonTypes.FIGHTING,
      color: '#A05038',
    },
    {
      type: pokemonTypes.NORMAL,
      color: '#A8A090',
    },
    {
      type: pokemonTypes.PSYCHIC,
      color: '#F870A0',
    },
    {
      type: pokemonTypes.ROCK,
      color: '#B8A058',
    },
    {
      type: pokemonTypes.DARK,
      color: '#7A5848',
    },
    {
      type: pokemonTypes.GROUND,
      color: '#E9D6A4',
    },
    {
      type: pokemonTypes.POISON,
      color: '#B058A0',
    },
    {
      type: pokemonTypes.FLYING,
      color: '#98A8F0',
    },
  ];

  constructor() {}

  public getColorPokemon(pokemonType: string) {
    return this.colorpokemons.find(
      (colorPokemon) => colorPokemon.type == pokemonType
    );
  }

  public getColorByTag(pokemonType: string) {
    return this.colorTagsTypes.find(
      (typePokemon) => typePokemon.type == pokemonType
    );
  }
}
