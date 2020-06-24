import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { UserPost } from '../share/Model/userPost.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({providedIn: 'root'})

export class accountFirebaseService {
	constructor(
		private firestore: AngularFirestore,
		private firedb: AngularFireDatabase
	){}
	createAccount(acc: UserPost): void{
		console.log("create accrun");
		this.firestore.collection('user').add(acc);
	}
	checkAccountById(userID: any) { 
		return this.firestore.collection('user', ref => ref.where('userID', '==', userID)).valueChanges();
	}
}