import { Injectable } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { User } from '../share/Model/user.model';
import { AppContact } from '../app.contacts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private authService: AuthService,
    private rouuter : Router
    ) { }
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
    this.removeUser();
    this.rouuter.navigate(['/menu'])
  }
  setUser(user: SocialUser){
    let _user: User ={
        id: user.id,
        authToken: user.authToken,
        email: user.email,
        idToken: user.idToken,
        name: user.name,
        photoUrl: user.photoUrl,
        provider: user.provider
    }
    localStorage.setItem(AppContact.USER_CURRENT, JSON.stringify(_user));
  }
  getUser(): User{
    let _user: User = JSON.parse(localStorage.getItem(AppContact.USER_CURRENT));
    return _user;
  }
  checkAuthen(): boolean{
    if(localStorage.getItem(AppContact.USER_CURRENT)) {return true;}
    else {return false;}
  }
  removeUser(){
    localStorage.removeItem(AppContact.USER_CURRENT);
  }
}
