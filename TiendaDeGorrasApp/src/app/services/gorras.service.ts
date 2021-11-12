import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGorra } from '../interfaces/gorras.interface';

@Injectable({
  providedIn: 'root',
})
export class GorrasService {
  constructor(private _http: HttpClient) {}

  public getAllGorras(): Observable<IGorra[]> {
    return this._http.get<IGorra[]>(`/assets/gorras_data.json`);
  }
}
