import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputsComponent } from 'src/app/shared/inputs/inputs.component';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DeudorFirebaseService } from 'src/app/services/deudor-firebase.service';
import { ICodeudor } from 'src/app/interfaces/codeudor.interface';
import { CodeudorFirebaseService } from 'src/app/services/codeudor-firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-codeudor',
  templateUrl: './codeudor.component.html',
  styleUrls: ['./codeudor.component.css'],
})
export class CodeudorComponent implements OnInit, OnDestroy {
  @ViewChild('sharedInputs') inputsComp!: InputsComponent;

  //Listas
  public passportList: string[] = ['CI', 'Pasaporte', 'RUN'];
  public sexList: string[] = ['Masculino', 'Femenino', 'No binario'];
  public maritalStatusList: string[] = [
    'Soltero/a',
    'Casado/a',
    'Viudo/a',
    'Divorciado/a',
    'Concubinado/a',
  ];
  public dwellingTypeList: string[] = [
    'Propia',
    'Alquilada',
    'Anticrético',
    'Cedida',
    'Heredada',
    'Otros',
  ];
  public organizationTypeList: string[] = [
    'OTB',
    'OECA',
    'CORACA',
    'Asociación',
    'Ninguno',
    'Otros',
  ];
  public instructionDegreeList: string[] = [
    'Primaria',
    'Secundaria',
    'Técnico',
    'Universitario',
    'Ninguno',
  ];

  //FormGroup y validadores
  public deudorForm: FormGroup = new FormGroup({
    //CodeudorForms
    otherCountry: new FormControl('No', [Validators.required]),
    workType: new FormControl(null, [Validators.required]),
  });

  private subscriptionList: Subscription[] = [];

  constructor(
    private _router: Router,
    private _codeudorFirebase: CodeudorFirebaseService
  ) {}

  ngOnInit(): void {
    this.subscriptionList.push(
      this.deudorForm
        .get('otherCountry')!
        .valueChanges.pipe(
          map((valor) => {
            if (valor == 'Si') {
              this.deudorForm.addControl(
                'otherCountryName',
                new FormControl(null, [Validators.required])
              );
            } else {
              this.deudorForm.removeControl('otherCountryName');
            }
          })
        )
        .subscribe()
    );
  }

  async ShowDeudorForm(): Promise<void> {
    let sharedInputs = this.inputsComp.returnSharedInputs;
    let codeudor: ICodeudor = {
      ...sharedInputs.value,
      ...this.deudorForm.value,
    };
    if (!(await this._codeudorFirebase.saveData(codeudor))) {
      Swal.fire({
        icon: 'error',
        text: 'Hubo un error al guardar, intente de nuevo',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      text: 'Registro guardado correctamente',
    });

    sharedInputs.reset();
    this.deudorForm.reset();
  }

  goToRoute(ruta: string[]): Promise<boolean> {
    return this._router.navigate(ruta);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptionList.forEach((subs) => subs.unsubscribe());
  }
}
