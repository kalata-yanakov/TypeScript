import { ICart } from '../../common/contracts/cart';
import { IProduct } from '../../common/contracts/product';
import { GenderType } from '../common/gender-type';
import { Product } from '../products/generic-product';

export class ShoppingCart implements ICart{
  private _productList: IProduct[]; 

  public constructor() {
    
    // Some initialization here
    this._productList = [];
  }
   

  public get productList(): IProduct[] {
    return this._productList;
  }

  public addProduct(product: IProduct): void {
    if(product === null) {
      throw new Error(`Invalid product type!`)
    }
    this.productList.push(product);
  }

  public removeProduct(product: IProduct): void {

    const productFound: IProduct | undefined = this.productList.find((x: IProduct) => x.name === product.name);

    if (productFound !== undefined) {

      this.productList.splice(this.productList.indexOf(productFound), 1);
    } else {
      throw new Error('Product cannot be found!');
    }
  }

  public containsProduct(product: IProduct): boolean {
    if (product === null) {
      throw new Error('Product cannot be null!');
    }

    return this.productList.some((x: IProduct) => x.name === product.name);
  }

  public totalPrice(): number {
    return this.productList.reduce((sum: number, x: IProduct) => {
      sum += x.price;

      return sum;
    }, 0);
  }
}
