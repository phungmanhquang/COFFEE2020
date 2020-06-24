import { Component, OnInit } from '@angular/core';
import { IProductSelect } from 'src/app/share/Model/productSelect.model';
import { HandleDataService } from 'src/app/service/handle-data.service';

@Component({
  selector: 'order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  listProduct: IProductSelect[];
  totalSelect: number;
  totalPrice: number;
  constructor(
    private handleDataService: HandleDataService,
  ) { }

  ngOnInit() {
    if(this.handleDataService.isDataCart()){
      this.listProduct = this.handleDataService.getDataCartLocal();
      this.cartRefresh(this.listProduct)
    }
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
