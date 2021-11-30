import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-institution-information',
  templateUrl: './institution-information.component.html',
  styleUrls: ['./institution-information.component.css'],
})
export class InstitutionInformationComponent implements OnInit {
  public gradeList: number[] = [6, 7, 8, 9, 10, 11, 12];
  public examsList: string[] = [
    'PAA',
    'PNA',
    'PIENSE I',
    'PIENSE II',
    'ELASH I',
    'ELASH II',
  ];
  public lenguajesList: string[] = ['Español', 'Ingles', 'Bilingüe'];
  public form: FormGroup = new FormGroup({
    sharedInstitution: new FormControl(null, [Validators.required]),
    instituteChangeName: new FormControl(null, [Validators.required]),
    institutionType: new FormControl(null, [Validators.required]),
    teachingApproach: new FormControl(null, [Validators.required]),
    grades: new FormArray(this.createElementsToForArrayGrades()), //array de controles que tienen todos las mismas reglas
    exams: new FormArray(this.createElementsToForArrayExams()),
    lenguajes: new FormArray(this.createElementsToForArrayLenguajes()),
  });

  get userFormGroupsGrades() {
    return <FormArray>this.form.get('grades');
  }
  
  get userFormGroupsExams() {
    return <FormArray>this.form.get('exams');
  }
  
  get userFormGroupsLenguajes() {
    return <FormArray>this.form.get('lenguajes');
  }

  constructor() {}

  ngOnInit(): void {}

  private createElementsToForArrayGrades(): FormControl[] {
    return this.gradeList.map(
      (grade) =>
        new FormControl(null, [
          Validators.required,
          Validators.pattern(/[0-9]/),
        ])
    );
  }
  
  private createElementsToForArrayExams(): FormControl[] {
    return this.examsList.map(
      () =>
        new FormControl(false)
    );
  }
  
  private createElementsToForArrayLenguajes(): FormControl[] {
    return this.lenguajesList.map(
      () =>
        new FormControl(null, [
          Validators.required,
        ])
    );
  }

  ShowForm() {
    console.log(this.form);
  }
}
