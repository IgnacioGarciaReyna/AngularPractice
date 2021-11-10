import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs/operators';
import { Iheroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css'],
})
export class SearchHeroeComponent implements OnInit {
  public heroeList: Iheroe[] = [];
  public loading: boolean = false;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroService: HeroesService
  ) {
    this._activatedRoute.params
      .pipe(
        tap({
          next: () => (this.loading = true),
        }),
        switchMap((params) =>
          this._heroService.getHeroesByName(params.termino)
        ),
        delay(1000)
      )
      .subscribe({
        next: (heroeList) => {
          (this.loading = false), (this.heroeList = heroeList);
        },
      });
  }

  ngOnInit(): void {}
}
