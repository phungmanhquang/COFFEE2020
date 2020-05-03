import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../service/handle-data.service';
import { IProductSelect } from '../share/Model/productSelect.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  time = {
    h: null,
    m: null,
    s: null
  }
  listProduct: IProductSelect[];
  totalSelect: number;
  totalPrice: number;
  constructor(
    private handleDataService: HandleDataService
  ) { }

  ngOnInit() {
    // this.handleDataService.cartData.subscribe(
    //   result => {
    //     this.listProduct = result;
    //   }
    // )
    if(this.handleDataService.isDataCart()){
      this.listProduct = this.handleDataService.getDataCartLocal();
      this.cartRefresh(this.listProduct)
    }
    this.startTime();
  }
  startTime(){
    let now = new Date();
    this.time.h = now.getHours()
    this.time.m = this.checktime(now.getMinutes());
    this.time.s = this.checktime(now.getSeconds());
    let t = setTimeout(()=>{this.startTime()}, 500);
  }
  checktime(i){
    if (i < 10) {i = "0" + i}; 
    return i;
  }
  cartRefresh(data: IProductSelect[]){
    this.totalSelect = 0;
    this.totalPrice = 0;
    data.forEach(
      item => {
        this.totalPrice = this.totalPrice + item.price*item.quantity;
        this.totalSelect = this.totalSelect + item.quantity;
      }
    ) 
  }
  fomartMoney(value) {
    if (parseInt(value) >= 1000) {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return value;
    }
  }
}
