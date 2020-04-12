import { Component, OnInit } from '@angular/core';
import { IProductSelect} from '../share/Modal/productSelect.modal';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  productTest = {
    drink : [
      {
        id: 'trachanh',
        img : '../../assets/product/trachanh.jfif',
        name : 'Tra chanh',
        price : 15000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'drink',
        listImg : [
          '../../assets/product/275eee9ffd50619e519d7ac0d7ebaf26.jfif',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'cafeden',
        img : '../../assets/product/1200px-A_small_cup_of_coffee.jfif',
        name : 'Caffe đen',
        price : 25000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'drink',
        listImg : [
          '../../assets/product/275eee9ffd50619e519d7ac0d7ebaf26.jfif',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'nuocam',
        img : '../../assets/product/photo-1-1544498821657955357020.jpg',
        name : 'Nước cam',
        price : 20000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'drink',
        listImg : [
          '../../assets/product/275eee9ffd50619e519d7ac0d7ebaf26.jfif',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'trasua',
        img : '../../assets/product/275eee9ffd50619e519d7ac0d7ebaf26.jfif',
        name : 'Trà sữa',
        price : 23000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'drink',
        listImg : [
          '../../assets/product/275eee9ffd50619e519d7ac0d7ebaf26.jfif',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'sodablue',
        img : '../../assets/product/soda-deep-blue-sea.jpg',
        name : 'Soda Blue' ,
        price : 23000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'drink',
        listImg : [
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      
    ],
    food : [
      {
        id: 'banhngot',
        img : '../../assets/product/thanhhuong-185910025942-cheese.jpg',
        name : 'Bánh ngọt',
        price : 25000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'food',
        listImg : [
          '../../assets/product/thanhhuong-185910025942-cheese.jpg',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'nemchuaran',
        img : '../../assets/product/nhung-mon-an-vat-de-kinh-doanh-de-ban-do-an-vat-cho-hoc-sinh-7.jpg',
        name : 'Nem Chua Ran',
        price : 10000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'food',
        listImg : [
          '../../assets/product/nhung-mon-an-vat-de-kinh-doanh-de-ban-do-an-vat-cho-hoc-sinh-7.jpg',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'pizza',
        img : '../../assets/product/pizza.jpg',
        name : 'Pizza' ,
        price : 23000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'food',
        listImg : [
          '../../assets/product/pizza.jpg',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      }
    ],
    cream : [
      {
        id: 'kemtuoi',
        img : '../../assets/product/2kinh-doanh-kem-tuoi-hieu-qua.jpg',
        name : 'Kem Tuoi',
        price : 23000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'cream',
        listImg : [
          '../../assets/product/2kinh-doanh-kem-tuoi-hieu-qua.jpg',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
      {
        id: 'kemdua',
        img : '../../assets/product/KemDua.jpg',
        name : 'Kem Dua' ,
        price : 23000,
        summary : 'Cách chọn đồ uống thanh nhiệt ngày nắng chuẩn healthy cho cơ thể luôn tươi tắn',
        type : 'cream',
        listImg : [
          '../../assets/product/KemDua.jpg',
          '../../assets/product/soda-deep-blue-sea.jpg',
          '../../assets/product/KemDua.jpg',
          '../../assets/product/pizza.jpg'
        ]
      },
    ]
  }
  //alert messeage
  showAlert: false;
  //alert messeage
  totalPrice = 0;
  totalSelect = 0;
  showCart = false;
  quantytiSelect: number = 0;
  ProductDetail : any;
  productMainImg : String;
  showDetail : boolean = false;
  productsSelected = [];

  constructor(
  ) { }

  ngOnInit() {
  }
  //ACTION ADD TO CART
  addToCart(){
    let itemSelect:IProductSelect = {
      id : this.ProductDetail.id,
      name: this.ProductDetail.name,
      quantity: this.quantytiSelect,
      image : this.ProductDetail.img,
      price: this.ProductDetail.price
    } ;
    if(itemSelect.id && itemSelect && itemSelect.quantity > 0){
      if(this.productsSelected.length > 0){
        let item = this.productsSelected.find(
          item => item.id === itemSelect.id
        );
        if(item){
          let index: number = this.productsSelected.findIndex(
            _item => _item.id === item.id
          )
          this.productsSelected[index].quantity = itemSelect.quantity; 
        }
        else{
          this.productsSelected.push(itemSelect);
        }
      }
      else{
        this.productsSelected.push(itemSelect);
      }
    }
    if(itemSelect.quantity == 0){
      let prod = this.productsSelected.find(
        prod => prod.id == itemSelect.id
      )
      if(prod){
        let index: number = this.productsSelected.findIndex(
          _prod => _prod.id == prod.id
        )
        if (index > -1) {
          this.productsSelected.splice(index, 1);
        }
      }
    }
    this.cartRefresh();
    console.log("productsSelected ::: ", this.productsSelected);
  }
  // SELECT ITEM
  subQuantity(){
    if(this.quantytiSelect > 0){
      this.quantytiSelect = this.quantytiSelect - 1;
    }
    else{
      this.quantytiSelect = this.quantytiSelect
    }
  }
  supQuantity(){
    this.quantytiSelect = this.quantytiSelect + 1;
  }
  selectProd(item){
    this.ProductDetail = item;
    let prod = this.productsSelected.find(
      prod => prod.id == item.id
    )
    if(prod){
      this.quantytiSelect = prod.quantity + 1;  
    }
    else{
      this.quantytiSelect = 1;
    }
    this.addToCart();
  }
  removeProd(item){
    this.ProductDetail = item;
    let prod = this.productsSelected.find(
      prod => prod.id == item.id
    )
    if(prod){
      if(prod.quantity == 1){
        this.deleteProd(item);
      }
      else{
        this.quantytiSelect = prod.quantity - 1;  
        this.addToCart();
      }
    }
  }
  deleteProd(item){
    if (confirm(`Bạn có muốn xóa "${item.name}" ra khỏi giỏi hàng ?`)) {
        this.ProductDetail = item;
        let prod = this.productsSelected.find(
          prod => prod.id == item.id
        )
        if(prod){
          this.quantytiSelect = 0;  
        }
        this.addToCart();
    }
  }
  // REFRESH CART
  cartRefresh(){
    this.totalSelect = 0;
    this.totalPrice = 0;
    this.productsSelected.forEach(
      item => {
        this.totalPrice = this.totalPrice + item.price*item.quantity;
        this.totalSelect = this.totalSelect + item.quantity;
      }
    ) 
  }
  // ACTION DISPLAY PAGE
  showDetailProduct(item){
      this.ProductDetail = item;
      this.productMainImg = this.ProductDetail.img;
      let prod = this.productsSelected.find(
        prod => prod.id === item.id
      )
      if(prod){
        this.quantytiSelect = prod.quantity
      }
      this.showDetail = true;
  }
  onShowCart(){
    this.showCart = true;
  }
  onChangeMainImg(url){
    this.productMainImg = url;
  }
  close(){
    this.quantytiSelect = 0;
    this.showDetail = false;
    this.showCart = false;
  }
  fomartMoney(value) {
    if (parseInt(value) >= 1000) {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return value;
    }
  }
  eventCart(event){
    switch(event.type) {
      case 'close':
        this.close();
      break;
      case 'deleteProd':
        this.deleteProd(event.data);
      break;
      case 'removeProd':
        this.removeProd(event.data);
      break;
      case 'selectProd':
        this.selectProd(event.data);
      break;
    }
  }
}
