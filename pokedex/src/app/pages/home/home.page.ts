import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPokemons } from 'interfaces/home/pokemonHome.interface';
import { from, fromEvent, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pokemonList: IPokemons[] = [];
  private page: number = 0;
  public searchPokemonInput: FormControl = new FormControl(null);

  public error: boolean = false;

  constructor(private _pokemonService: PokemonService) {
    this._pokemonService.getPokemons(this.page).subscribe({
      next: (pokemon: IPokemons) => {
        this.pokemonList.push(pokemon);
      },
    });
  }

  ngOnInit(): void {
    this.searchPokemonInput.valueChanges
      .pipe(
        debounceTime(900),
        tap({
          next: () => {
            this.error = false;
            this.pokemonList = [];
          },
        }),
        switchMap((termino: string) => {
          this.page = 0;
          if (termino !== '')
            return this._pokemonService
              .getPokemonByName(termino.toLocaleLowerCase())
              .pipe(
                catchError((_) => {
                  this.error = true;
                  return of(null);
                })
              );
          return this._pokemonService.getPokemons(this.page);
        }),
        filter((valor) => valor != null),
        tap(console.log)
      )
      .subscribe({
        next: (pokemon: IPokemons) => {
          this.pokemonList.push(pokemon);
        },
      });
  }

  loadData(event) {
    console.log(event);
    this.page++;

    this._pokemonService.getPokemons(this.page).subscribe({
      next: (pokemon: IPokemons) => {
        this.pokemonList.push(pokemon);
      },
      complete: () => {
        event.target.complete();
      },
    });
  }
}
