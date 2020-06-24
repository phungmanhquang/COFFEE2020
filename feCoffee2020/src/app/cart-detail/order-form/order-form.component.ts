import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleDataService } from 'src/app/service/handle-data.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { OrderService } from 'src/app/service/order.service';
import {Item, Order} from '../../share/Model/order.model'
import { AccountService } from 'src/app/service/account.service';
import { User } from 'src/app/share/Model/user.model';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  success = false;
  formOrder: FormGroup;
  nameErr = false;
  addressErr= false;
  phoneErr = false;
  textErr: string;
  user: User

  constructor(
    private router: Router,
    private handleDataService : HandleDataService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private accountService: AccountService
  ) { }
  
  ngOnInit() {
    this.formOrder = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      note: [''],
    })
    this.user = this.accountService.getUser();
  }
  order(){
    if(this.checkName() && this.checkAdress() && this.checkPhone()){
      const orderData : Order = {
        accountName: this.user.name,
        address: this.formOrder.value.address,
        endTime: null,
        listProduct: this.converDataOrder(),
        totalprice: this.getTotalPrice(),
        note: this.formOrder.value.note,
        orderTime: new Date(),
        reason: null,
        status: "waitting",
        userId: this.user.id,
        username: this.formOrder.value.name
      }
      // this.success = true;
      //       setTimeout(()=>{
      //         this.success = false;
      //         this.handleDataService.removeDataLocal()
      //         this.router.navigate(['./menu'])
      //       }, 2000)
      console.log("formOrder ::: ", orderData);
      this.orderService.createOrder(orderData).then(
        result => {
          if(result){
            this.success = true;
            setTimeout(()=>{
              this.success = false;
              this.handleDataService.removeDataLocal()
              this.router.navigate(['./menu'])
            }, 2000)
          }
        }
      )
      }
  }
  checkName(): boolean{
    let name  = this.formOrder.value.name;
    if(name){
     if(name <= 3){
      this.showErr("name",'Tên cần dài hơn 3 kí tự');
      return false;
     }
     else{
      return true;
     }
    }
    else {
      this.showErr("name",'Vui lòng điển tên') ;
      return false;
    }
  }
  checkAdress(): boolean{
    let address = this.formOrder.value.address
    if(address){
        let spaceCount = address.split(" ").length - 1;
        if(spaceCount > 0) {
          return true;
        }
        else {
          this.showErr("address", "Vui lòng điền địa chỉ cụ thể")
          return false;
        }

    }
    else {
      this.showErr("address", 'Vui lòng điền địa chỉ');
      return false;
    }
  }
  checkPhone(): boolean{
    let phone = this.formOrder.value.phone
    if(phone){
      let checkStringToPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g
      if(!checkStringToPhone.test(phone)){
        this.showErr("phone", "Số điện thoại không đúng")
      }
      else{
        return true;
      }
    }
    else {
      this.showErr("phone", "Vui lòng điền số điện thoại");
      return false;
    }
  }
  showErr(e: ERR, _textErr: string){
    switch (e) {
      case 'name': 
        this.nameErr = true;
      break;
      case 'phone':
        this.phoneErr = true;
      break;
      case 'address':
        this.addressErr = true;
      break;
    }
    this.textErr = _textErr;
  }
  hiddenErr(){
    this.nameErr = this.phoneErr = this.addressErr = false;
    this.textErr = null;
  }
  converDataOrder():Item[]{
    const listData = this.handleDataService.getDataCartLocal();
    let dataResult: Item[] = [];
    listData.forEach(e=>{
      let item: Item = {
        idItem : e.id,
        quantity : e.quantity,
        img: e.image,
        price: e.price,
        nameItem: e.name,
      };
      dataResult.push(item);
    })
    return dataResult;
  }
  getTotalPrice(): number{
    let total = 0;
    const listData = this.handleDataService.getDataCartLocal();
    listData.forEach( item => {
        const itemPrice = item.price * item.quantity;
        total = total + itemPrice;
    })
    return total;
  }
}
type ERR = 'name' | 'phone' | 'address'