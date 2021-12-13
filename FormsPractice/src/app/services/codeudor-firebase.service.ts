import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICodeudor } from '../interfaces/codeudor.interface';
import { IDeudor } from '../interfaces/deudor.interface';

@Injectable({
  providedIn: 'root',
})
export class CodeudorFirebaseService {
  constructor(private angularFirestore: AngularFirestore) {}

  async saveData(codeudor: ICodeudor): Promise<boolean> {
    try {
      const data = this.angularFirestore.collection<ICodeudor>('Codeudor');
      data.add(codeudor);
      return true;
    } catch (error) {
      return false;
    }
  }
}
