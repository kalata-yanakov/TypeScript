import { Product } from './products/product';

export class Category {
  private readonly _name: string;
  private _products: Product[] = [];

  public constructor(name: string) {
    if (name.length < 2 || name.length > 15) {
      throw new Error('Not a valid name');
    }
      this._name = name;
  }

  public get products(): Product[] {
      return this._products;
  }

  public addProduct(product: Product): void {
    if (product === null || product === undefined) {
      throw new Error('Not found');
    }
    this._products.push(product);
    this._products
                  .sort((a: Product, b: Product) => a.brand.localeCompare(b.brand))
                  .sort((a: Product, b: Product) => b.price - a.price);
    }

  public removeProduct(product: Product): void {
    if (product === null || (!this.products.includes(product))) {
      throw new Error(`Product not found: ${this._name}`);
    }
    const productIndex: number = this._products.indexOf(product);
    this._products.splice(productIndex, 1);
  }

  public print(): string {
    const productString: string = this._products.map((a : Product) => a.print()).join('\n');

    return (`#Category: ${this._name}\n${productString}`);
  }

  // Do not remove this. It is used for the tests.
  protected set mockProductsData(value: Product[]) {
    this._products = value;
  }
}
