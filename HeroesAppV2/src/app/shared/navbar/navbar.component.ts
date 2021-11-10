import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, map, switchMap } from 'rxjs/operators';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //para utilizar el form control es necesario importar la clase reactiveformsmodule en el app.module en la sección de los imports
  public searchControl: FormControl = new FormControl();
  public heroesName: string[] = [];
  public filteredOptions: string[] = [];

  constructor(private _router: Router, private _heroService: HeroesService) {
    this._heroService.getAllNamesHeroes().subscribe({
      next: (_heroesNameList) => (this.heroesName = _heroesNameList),
    });
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        map<string, string>((termino: string) => {
          this.filteredOptions = this.heroesName.filter((nombreHeroe) =>
            nombreHeroe.toLowerCase().includes(termino.toLocaleLowerCase())
          );
          return termino;
        }),
        debounceTime(1000),
        switchMap((termino) => {
          if (termino == '') {
            return this.goToRoute(['heroes']);
          }
          return this.goToRoute(['/searchHeroe', termino]);
        })
      )
      .subscribe();
  }

  goToRoute(route: string[]): Promise<boolean> {
    return this._router.navigate(route);
  }

  // goToHeroes(): void {
  //   this._router.navigate(['/heroes'])
  // }

  // goToAboutUs(): void {
  //   this._router.navigate(['/aboutus'])
  // }
}
