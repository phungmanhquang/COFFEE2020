import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { accountFirebaseService } from '../service/accountFirebase.service';
import { UserPost } from '../share/Model/userPost.model';
import { User } from '../share/Model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private router: Router,
    private accountFiabseService: accountFirebaseService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((result) => {
      if(result){
        this.user = result;
        this.checkAccFormFb(this.user);
        this.accountService.setUser(this.user);
        this.router.navigate(['/cart'])
      }
    });
  }
  signInWithFB(){
    this.accountService.signInWithFB()
  }
  signInWithGG(){
    this.accountService.signInWithGoogle()
  }
  checkAccFormFb(userData: SocialUser){
    const userCurrent : User = this.accountService.getUser();
    if(userData && !userCurrent){
      this.accountFiabseService.checkAccountById(userData.id).subscribe(
        result =>{
          if(result.length == 0){
            let usernew: UserPost ={
              userID : userData.id,
              userName : userData.name,
              provider : userData.provider,
              photoUrl : userData.photoUrl,
              timeRegister: new Date(),
              email : userData.email || null
            }
            this.accountFiabseService.createAccount(usernew);
          }
        }
      )
    }
  }
}
