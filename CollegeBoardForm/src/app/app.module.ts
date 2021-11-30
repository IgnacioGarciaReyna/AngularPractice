import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { InstitutionInformationComponent } from './components/institution-information/institution-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    InstitutionInformationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
