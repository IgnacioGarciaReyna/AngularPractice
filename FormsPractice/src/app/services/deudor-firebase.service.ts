import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import {
  concatMap,
  filter,
  map,
  mergeMap,
  take,
  tap,
  toArray,
} from 'rxjs/operators';
import { collectionName } from '../enums/app.enums';
import { IDeudor } from '../interfaces/deudor.interface';

@Injectable({
  providedIn: 'root',
})
export class DeudorFirebaseService {
  constructor(private angularFirestore: AngularFirestore) {}

  async saveData(deudor: IDeudor): Promise<boolean> {
    try {
      const data = this.angularFirestore.collection<IDeudor>(
        collectionName.DEUDOR
      );
      data.add({
        ...deudor,
        dateCreated: new Date().getTime().toString(),
        id: this.angularFirestore.createId(),
        fullName: `${deudor.firstName} ${deudor.lastName}`,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  getDebtors(): Observable<IDeudor[]> {
    return this.angularFirestore
      .collection<any>(collectionName.DEUDOR, (ref) =>
        ref.orderBy('dateCreated', 'desc')
      )
      .valueChanges()
      .pipe(
        map<IDeudor[], IDeudor[]>((debtors: IDeudor[]) =>
          debtors.length <= 9 ? debtors : debtors.slice(0, 10)
        ),
        take(1)
      );
  }

  getDebtorsByName(name: string) {
    return this.angularFirestore
      .collection<IDeudor>(collectionName.DEUDOR)
      .valueChanges()
      .pipe(
        mergeMap((debtors) => debtors),
        filter((debtor: IDeudor) =>
          debtor.fullName!.toLowerCase().includes(name.toLowerCase())
        )
      );
  }

  getDebtorsById(id: string) {
    return this.angularFirestore.collection<IDeudor>(collectionName.DEUDOR, ref => ref.where('id', '==', id))
    .valueChanges()
  }

}
