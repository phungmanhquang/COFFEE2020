import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { AccountService } from 'src/app/service/account.service';
import { Order } from 'src/app/share/Model/order.model';

@Component({
  selector: 'order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  listOrder: Order[] = [];
  constructor(
    private OrderService : OrderService,
    private AccountService : AccountService
  ) { }

  ngOnInit() {
    this.OrderService.getOrderByID(this.AccountService.getUser().id).subscribe(
      result => {
        console.log('OrderHistoryComponent getOrderByID ::: ', result);
        let _listOrder = result.map(
          order => {
            return order as Order;
          }
        );
        this.listOrder = _listOrder.sort(
          (a, b)=> {
            console.log('sort :::::::: ',(new Date(b.orderTime.seconds * 1000)).getTime() , (new Date(a.orderTime.seconds * 1000)).getTime())
            return (new Date(b.orderTime.seconds * 1000)).getTime() - (new Date(a.orderTime.seconds * 1000)).getTime()}
        )
        this.listOrder.forEach(o=>{
          var date = new Date(o.orderTime.seconds * 1000);
          console.log('date zozozoz ::: ', date )
        })
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
