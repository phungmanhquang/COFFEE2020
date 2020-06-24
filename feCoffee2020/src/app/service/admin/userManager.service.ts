import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  getUser() {
    return this.firestore.collection('user', ref => ref.orderBy('timeRegister')).snapshotChanges();
  }
}
