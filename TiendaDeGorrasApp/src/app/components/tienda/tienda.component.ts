import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IGorra } from 'src/app/interfaces/gorras.interface';
import { GorrasService } from 'src/app/services/gorras.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public gorrasList: IGorra[] = [];

  constructor(public _gorraService: GorrasService) {
    this._gorraService
      .getAllGorras()
      .pipe(map((gorras) => (this.gorrasList = gorras)))
      .subscribe();
  }
  ngOnInit(): void {
  }

}
