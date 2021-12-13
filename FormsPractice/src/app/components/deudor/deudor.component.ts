import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
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
import { IDeudor } from 'src/app/interfaces/deudor.interface';
import { DeudorFirebaseService } from 'src/app/services/deudor-firebase.service';
import { InputsComponent } from 'src/app/shared/inputs/inputs.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deudor',
  templateUrl: './deudor.component.html',
  styleUrls: ['./deudor.component.css'],
})
export class DeudorComponent implements OnInit, AfterViewChecked {
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

  public savingInformation: boolean = false;

  constructor(
    private _router: Router,
    private _deudorFirebase: DeudorFirebaseService,
    private readonly _changeDetectroRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    //se usa after view porque el hijo se inicia con un ViewChild, si lo hacemos en un OnInit el hijo todavía no se inició
    if (localStorage.getItem('ModificationUser') !== null) {
      this.deudorForm.patchValue(
        JSON.parse(localStorage.getItem('ModificationUser')!)
      );
      this.inputsComp.returnSharedInputs.patchValue(
        JSON.parse(localStorage.getItem('ModificationUser')!)
      )
      this._changeDetectroRef.detectChanges();
    }
  }

  async ShowDeudorForm(): Promise<void> {
    this.savingInformation = true;
    let sharedInputs = this.inputsComp.returnSharedInputs;
    let deudor: IDeudor = { ...sharedInputs.value, ...this.deudorForm.value };
    if (!(await this._deudorFirebase.saveData(deudor))) {
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
    this.savingInformation = false;
  }

  goToRoute(ruta: string[]): Promise<Boolean> {
    return this._router.navigate(ruta);
  }
}
