import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
})
export class PersonalDataComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    institutionName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9_ ]*$/),
    ]),
    adressDirection: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9_ ]*$/),
    ]),
    region: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9_ ]*$/),
    ]),
    district: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9_ ]*$/),
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[0-9]*$/),
    ]),
    faxNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  ShowForm() {
    console.log(this.form);
  }

  IsValidField(field: string) {
    return this.form.get(field)!.invalid && this.form.get(field)!.touched;
  }

  MessageError(field: string): string[] {
    let errorList: string[] = [];
    if (this.IsValidField(field)) {
      if (this.form.get(field)!.errors?.required) {
        errorList.push('El campo es requerido');
      }
      if (this.form.get(field)!.errors?.minlength) {
        errorList.push('El campo debe contener al menos 5 caracteres');
      }
      if (this.form.get(field)!.errors?.maxlength) {
        errorList.push('El campo debe contener menos de 50 caracteres');
      }
      if (this.form.get(field)!.errors?.pattern) {
        if (field == 'phoneNumber' || field == 'faxNumber') {
          errorList.push('El campo debe contener solo números');
        } else {
          errorList.push('El campo debe contener solo números y letras');
        }
      }
    }
    return errorList;
  }
}
