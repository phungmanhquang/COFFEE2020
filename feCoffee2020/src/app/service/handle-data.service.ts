import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductSelect } from '../share/Model/productSelect.model';
import { AppContact } from '../app.contacts';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  cartData: BehaviorSubject<IProductSelect[]> = new BehaviorSubject<IProductSelect[]>(null)
  constructor() {}
  setDataCart(data:IProductSelect[]): void{
    this.cartData.next(data);
    this.setDataCartLocal(data);
  }
  setDataCartLocal(data: IProductSelect[]): void{
    localStorage.setItem(AppContact.CART_CURRENT, JSON.stringify(data))
  }
  getDataCartLocal(): IProductSelect[]{
    let data: IProductSelect[];
    data = JSON.parse(localStorage.getItem(AppContact.CART_CURRENT));
    return data;
  }
  removeDataLocal(): void{
    localStorage.removeItem(AppContact.CART_CURRENT);
  }
  isDataCart():boolean{
    let data: IProductSelect[];
    data = JSON.parse(localStorage.getItem(AppContact.CART_CURRENT));
    if(data) return true;
    else return false;
  }
}
