import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputsComponent } from 'src/app/shared/inputs/inputs.component';

@Component({
  selector: 'app-deudor',
  templateUrl: './deudor.component.html',
  styleUrls: ['./deudor.component.css'],
})
export class DeudorComponent implements OnInit {
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

  //FormGroup y validadores
  public deudorForm: FormGroup = new FormGroup({
    maritalState: new FormControl(null, [Validators.required]),
    dwellingType: new FormControl(null, [Validators.required]),
    department: new FormControl(null, this.ValidatorString),
    province: new FormControl(null, this.ValidatorString),
    municipality: new FormControl(null, this.ValidatorString),
    locality: new FormControl(null, this.ValidatorString),
    houseStreet: new FormControl(null, this.ValidatorString),
    houseNumber: new FormControl(null, this.ValidatorNumber),
    houseZone: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, this.ValidatorNumber),
    dependentsNumber: new FormControl(null, this.ValidatorNumber),
  });

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ShowDeudorForm() {
    let sharedInputs = this.inputsComp.returnSharedInputs();
    console.log(sharedInputs);
    console.log(this.deudorForm);
  }

  goToRoute(ruta: string[]): Promise<Boolean> {
    return this._router.navigate(ruta);
  }
}
