import { Component, OnInit } from '@angular/core';
import { IGorra } from 'src/app/interfaces/gorras.interface';
import { GorrasService } from 'src/app/services/gorras.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public gorrasList: IGorra[] = [];

  constructor(public _gorraService: GorrasService) {
    this._gorraService
      .getAllGorras()
      .pipe(map((gorras) => (this.gorrasList = gorras)))
      .subscribe();
  }

  ngOnInit(): void {}
}
