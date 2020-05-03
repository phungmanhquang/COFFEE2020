import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  @Input() showDetail: boolean = false;
  @Input() ProductDetail: any;
  @Input() productMainImg: any;
  @Input() quantytiSelect: number;
  @Output() eventDetail: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log("ProductDetail ::: ", this.ProductDetail)
  }
  callOut(_type, _data){
    let dataEvent: eventOutput = {
      type : _type,
      data : _data
    }
    this.eventDetail.emit(dataEvent)
  }
  fomartMoney(value) {
    if (parseInt(value) >= 1000) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return value;
    }
  }
  onChangeMainImg(url){
    this.productMainImg = url;
  }
}
interface eventOutput{
  type: string;
  data: Object;
}
