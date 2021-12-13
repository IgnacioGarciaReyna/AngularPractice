import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, take, tap } from 'rxjs/operators';
import { IDeudor } from 'src/app/interfaces/deudor.interface';
import { DeudorFirebaseService } from 'src/app/services/deudor-firebase.service';

@Component({
  selector: 'app-deudor-register-list',
  templateUrl: './deudor-register-list.component.html',
  styleUrls: ['./deudor-register-list.component.css'],
})
export class DeudorRegisterListComponent implements OnInit {
  //Observable lista
  public deudorList!: IDeudor[];

  //Buscador
  public searchByName: FormControl = new FormControl(null, [
    Validators.required,
  ]);

  constructor(
    private _deudorFirebase: DeudorFirebaseService,
    private router: Router
  ) {
    _deudorFirebase
      .getDebtors()
      .pipe(tap())
      .subscribe({
        next: (deudorList) => {
          this.deudorList = deudorList;
        },
      });
  }

  ngOnInit(): void {
    this.searchByName.valueChanges
      .pipe(
        debounceTime(2000),
        tap({
          next: () => (this.deudorList = []),
        }),
        switchMap((value) => this._deudorFirebase.getDebtorsByName(value))
      )
      .subscribe({
        next: (deudorList) => {
          console.log(deudorList);
          this.deudorList.push(deudorList);
        },
      });
  }

  editarUsuario(id: string) {
    this._deudorFirebase
      .getDebtorsById(id)
      .pipe(take(1))
      .subscribe({
        next: (user) => {
          localStorage.setItem('ModificationUser', JSON.stringify(user[0]));
        },
        complete: () => this.router.navigate(['deudor']),
      });
  }
}
