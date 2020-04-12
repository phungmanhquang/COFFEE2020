import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() listProduct ;
  @Input() totalPrice;
  @Input() totalSelect;
  @Output() cartEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("CartComponent listProduct ::: ", this.listProduct);
    
  }
  functionCallOut(type,item){
    let eventOutput = {
      type : type,
      data : item
    }
    this.cartEvent.emit(eventOutput);
  }
  fomartMoney(value) {
    if (parseInt(value) >= 1000) {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return value;
    }
  }
}
