import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
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

  //Arrays de validadores
  private ValidatorString: Validators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
    Validators.pattern(/^[a-zA-Z_ ]*$/),
  ];

  private ValidatorNumber: Validators = [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(30),
    Validators.pattern(/^[a-zA-Z_ ]*$/),
  ];

  private ValidatorStringAndNumber: Validators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
    Validators.pattern(/^[a-zA-Z_ ]*$/),
  ];

  //FormControl
  public deudorForm: FormGroup = new FormGroup({
    //Shared Forms
    lastName: new FormControl(null, this.ValidatorString),
    firstName: new FormControl(null, this.ValidatorString),
    passportType: new FormControl(null, [Validators.required]),
    passportNumber: new FormControl(null, this.ValidatorNumber),
    bornDate: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    organizationType: new FormControl("Ninguno", [Validators.required]),
    instructionDegree: new FormControl(null, [Validators.required]),
  });

   get returnSharedInputs(): FormGroup {
    return this.deudorForm;
  }

  private subscriptionList: Subscription[] = [];
  

  constructor() {}

  ngOnInit(): void {
    this.subscriptionList.push(
      this.deudorForm
        .get('organizationType')!
        .valueChanges.pipe(
          map((valor) => {
            if (valor == 'Otros') {
              this.deudorForm.addControl(
                'organizationTypeOther',
                new FormControl(null, [Validators.required])
              );
            } else {
              this.deudorForm.removeControl('organizationTypeOther');
            }
            if ((valor != 'Ninguno')) {
              this.deudorForm.addControl(
                'organizationName',
                new FormControl(null, this.ValidatorString)
              );
              this.deudorForm.addControl(
                'organizationAdress',
                new FormControl(null, this.ValidatorStringAndNumber)
              );
            } else{
              this.deudorForm.removeControl('organizationName');
              this.deudorForm.removeControl('organizationAdress');
            }
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptionList.forEach((subs) => subs.unsubscribe());
  }
}
