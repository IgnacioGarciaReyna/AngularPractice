import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DeudorComponent } from './components/deudor/deudor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeudorComponent } from './components/codeudor/codeudor.component';
import { appRouting } from 'src/app/app.routes';
import { InputsComponent } from './shared/inputs/inputs.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DeudorRegisterListComponent } from './components/deudor-register-list/deudor-register-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeudorComponent,
    CodeudorComponent,
    InputsComponent,
    DeudorRegisterListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
