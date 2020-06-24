import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../share/Model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  getListOder() {
    return this.firestore.collection('orders').snapshotChanges();
  }
  createOrder(order){
    return this.firestore.collection('orders').add(order);
  }
  getOrderByID(id: any) {
    return this.firestore.collection('orders', ref => ref.where('userId', '==', id)).valueChanges();
  }
}
