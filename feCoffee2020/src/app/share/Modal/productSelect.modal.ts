export class IProductSelect {
  constructor( _id: any , _Name: String, _quantity : Number, _image: String, _price: any) {
      this.id = _id;
      this.name = _Name;
      this.quantity = _quantity;
      this.image = _image;
      this.price = _price
    }
  public id : any
  public name : String
  public quantity : Number
  public image : String 
  public price : any
}