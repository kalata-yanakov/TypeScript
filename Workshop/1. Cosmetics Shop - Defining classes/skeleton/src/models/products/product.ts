import { GenderType } from '../common/gender-type';

export class Product {

  private readonly _price: number;

  private readonly _name: string;

  private readonly _brand: string;

  private readonly _gender: GenderType;

  public constructor(name: string, brand: string, price: number, gender: GenderType) {

    if (name.length < 3 || name.length > 10) {
      throw new Error('Name is not correct length');
    } else if (brand.length < 2 || brand.length > 10) {
      throw new Error('Brand is not correct length');
    } else if (price < 0) {
      throw new Error('Price is not correct length');
    }

    this._brand = brand;
    this._name = name;
    this._price = price;
    this._gender = gender;
  }

  public get price(): number {
    return this._price;
  }

  public get gender(): GenderType {
    return this._gender;
  }

  public get brand(): string {
    return this._brand;
  }

  public get name(): string {
    return this._name;
  }

  public print(): string {
    return `#${this._name} ${this._brand}\r\n #Price: \$${this.price}\r\n #Gender: ${this._gender}\r\n ===`;
  }
}
