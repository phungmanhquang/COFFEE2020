import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { HandleDataService } from 'src/app/service/handle-data.service';
import { IProductSelect } from 'src/app/share/Model/productSelect.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() listProduct : IProductSelect[] ;
  @Input() totalPrice;
  @Input() totalSelect;
  @Output() cartEvent = new EventEmitter();
  @Input() showCart: boolean = false;
  constructor(
    private router: Router,
    private handleDataService: HandleDataService
  ) { }

  ngOnInit() {
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
  onSubmitToCartDetail(){
    this.handleDataService.setDataCart(this.listProduct);
    this.router.navigate(['/cart'])
  }
}
