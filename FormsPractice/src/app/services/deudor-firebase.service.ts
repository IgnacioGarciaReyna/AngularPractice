import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DeudorFirebaseService {

  constructor(private angularFirestore: AngularFirestore) {
  }

  saveData(){
    const data = this.angularFirestore.collection<any>("Deudor");
    data.add({
      mensaje : 'hola',
      mensaje2 : 'mundo'
    })
  }
}
