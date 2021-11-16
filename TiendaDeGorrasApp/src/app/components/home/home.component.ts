import { Component, OnInit } from '@angular/core';
import { IGorra } from 'src/app/interfaces/gorras.interface';
import { GorrasService } from 'src/app/services/gorras.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public gorrasList: IGorra[] = [];

  constructor(public _gorraService: GorrasService, private _router : Router) {
    this._gorraService
      .getAllGorras()
      .pipe(map((gorras) => (this.gorrasList = gorras)))
      .subscribe();
  }

  ngOnInit(): void {}

  goToRoute(ruta:string[]) : Promise<Boolean> {
    return this._router.navigate(ruta);
  }
}
