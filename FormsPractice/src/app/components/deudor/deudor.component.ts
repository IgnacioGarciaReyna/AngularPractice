import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deudor',
  templateUrl: './deudor.component.html',
  styleUrls: ['./deudor.component.css'],
})
export class DeudorComponent implements OnInit {
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
    lastName: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    passportType: new FormControl(null, [Validators.required]),
    passportNumber: new FormControl(null, [Validators.required]),
    bornDate: new FormControl(null, [Validators.required]),
    sexType: new FormControl(null, [Validators.required]),
    maritalState: new FormControl(null, [Validators.required]),
    dwellingType: new FormControl(null, Validators.required),
    department: new FormControl(null, [Validators.required]),
    province: new FormControl(null, [Validators.required]),
    municipality: new FormControl(null, [Validators.required]),
    locality: new FormControl(null, [Validators.required]),
    houseNumber: new FormControl(null, [Validators.required]),
    houseZone: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    organizationType: new FormControl(null, [Validators.required]),
    instructionDegree: new FormControl(null, [Validators.required]),
    dependentsNumber: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  ShowDeudorForm() {
    console.log(this.deudorForm);
  }
}
