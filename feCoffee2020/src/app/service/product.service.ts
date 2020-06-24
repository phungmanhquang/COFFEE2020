import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  getListProduct() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
