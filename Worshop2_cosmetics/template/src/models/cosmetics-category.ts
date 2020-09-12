import { isLength } from 'validator';
import { IProduct } from '../common/contracts/product';
import { ICategory } from './../common/contracts/category';

export class CosmeticsCategory implements ICategory {
  private readonly minNameLength: number = 2;
  private readonly maxNameLength: number = 15;
  private readonly _name: string;
  private _products: IProduct[];

  public constructor(name: string) {
    if (!isLength(name, { min: this.minNameLength, max: this.maxNameLength })) {
      throw new Error(`Product name length must be between ${this.minNameLength} and ${this.maxNameLength}`);
    }

    this._name = name;
    this._products = [];
  }

  public get products(): IProduct[] {
    return this._products;
  }

  public get name(): string {
    return this._name;
  }

  public addProduct(product: IProduct): void {

    if (product === null) {
      throw new Error('Product to add cannot be null!');
    }

    this.products.push(product);
  }

  public removeProduct(product: IProduct): void {

    if (product === null) {
      throw new Error('Product to remove cannot be null!');
    }

    const productFound: IProduct | undefined = this.products.find((x: IProduct) => x.name === product.name);

    if (productFound === undefined) {
      throw new Error('Product to remove cannot be null!');
    } else {

      this.products.splice(this.products.indexOf(product), 1);
    }
  }

  public print(): string {
    if (this.products.length === 0) {
      return `#Category: ${this._name}\r\n #No product in this category`;
    }

    let str: string = '';
    str += `#Category: ${this._name}\n`;

    this.products
      .sort((a: IProduct, b: IProduct) =>
        a.brand === b.brand ?
          (b.price - a.price) :
          a.brand.localeCompare(b.brand))
      .forEach((x: IProduct) => {
        str += `${x.print()}\n`;
      });

    return str.trim();
  }

  // Do not remove this. It is used for the tests.
  protected set mockProductsData(value: IProduct[]) {
    this._products = value;
  }
}
