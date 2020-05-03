import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  getPolicies() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
