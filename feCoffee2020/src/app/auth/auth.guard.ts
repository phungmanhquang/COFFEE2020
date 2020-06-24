import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AccountService } from '../service/account.service';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private roter: Router
  ){}
  canActivate() {
    if(this.accountService.checkAuthen()){
      return true;
    }
    this.roter.navigate(['/login'])
    return false;
  }
} 