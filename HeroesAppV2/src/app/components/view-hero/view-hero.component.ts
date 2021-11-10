import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import {
  delay,
  filter,
  map,
  mergeAll,
  mergeMap,
  take,
  tap,
} from 'rxjs/operators';
import { Iheroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.css'],
})
export class ViewHeroComponent implements OnInit {
  public heroe: Iheroe | undefined = undefined;
  public loading: boolean = false;

  //Indicamos que _heroesService va a ser de tipo HeroesService, por lo tanto heredará todos sus metodos, como getAllHeroes, que creamos nosotros mismos
  constructor(
    public _heroeService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) {
    let nombreHeroe: string =
      this._activatedRoute.snapshot.params['nombreHeroe'];

    this._heroeService.GetHeroe(nombreHeroe).subscribe({
      next: (_heroe) => (this.heroe = _heroe!),
    });

    // this._heroeService
    //   .getAllHeroes()
    //   .pipe(tap({
    //     next:() => (this.loading = true),
    //   }),
    //     delay(1000),
    //     map((heroes) => {
    //       let array: Iheroe[] | any = heroes;
    //       const nombre: string =
    //         this._activatedRoute.snapshot.params['nombreHeroe'];
    //       return _heroeService.GetHeroe(array, nombre);
    //     })
    //   )
    // .subscribe({
    //   next: (x) => {
    //     this.heroesList = x;
    //   },
    //   complete: () => (this.loading = false),
    // });
  }

  // public DetailsHeroe: any;

  // constructor(
  //   private _http: HttpClient,
  //   public _heroeService: HeroesService,
  //   private _activatedRoute: ActivatedRoute
  // ) {
  //   let heroeParams = this._activatedRoute.snapshot.params['nombreHeroe'];
  //   this.DetailsHeroe = this.GetHeroe1(heroeParams)!;
  //   console.log(this.DetailsHeroe);

  // }

  // public GetHeroe1(nombre: string): any {
  //   this._http.get<Iheroe[]>(`/assets/heroes_data.json`).pipe(filter((heroe : any) => heroe.nombre == nombre),tap(console.log)).subscribe(
  //   //   {
  //   //   next: (res: any) => {
  //   //     for (const heroe of res) {
  //   //       if (heroe.nombre == nombre) {
  //   //         console.log(heroe);
  //   //         return heroe;
  //   //       }
  //   //     }
  //   //   },
  //   // }
  // console.log)
  // }

  ngOnInit(): void {}
}
