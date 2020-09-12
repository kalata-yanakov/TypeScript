import { Product } from '../products/product';

export class ShoppingCart {
  private _productList: Product[] = [];

  public constructor() {

  }

  public get productList(): Product[] {
    return this._productList.slice();
  }

  public addProduct(product: Product): void {
     this._productList.push(product);
  }

  public removeProduct(product: Product): void {

    this._productList = this._productList.filter((el: Product) => el !== product);
  }

  public containsProduct(product: Product): boolean {

    return this._productList.includes(product);
  }

  public totalPrice(): number {
    return this._productList.reduce((sum: number, el: Product) => sum + el.price, 0);
  }
}
