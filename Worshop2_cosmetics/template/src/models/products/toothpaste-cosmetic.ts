import { IToothpaste } from '../../common/contracts/toothpaste';
import { GenderType } from '../common/gender-type';
import { Product } from './generic-product';
import { Validator } from '../../common/contracts/validators';

export class Toothpaste extends Product implements IToothpaste{
  
  protected static readonly minNameLength: number = 3;
  protected static readonly maxNameLength: number = 10;
  protected static readonly minBrandLength: number = 2;
  protected static readonly maxBrandLength: number = 10;
  protected static readonly minPrice: number = 0;

  private _ingredients: string;

  constructor(
    name: string,
    brand: string,
    price: number,
    gender: GenderType,
    ingredients: string) {
      super(name, brand, price, gender);
      this.ingredients = ingredients;
      }

  public get ingredients(): string {
    return this._ingredients;
  }

  public set ingredients(value: string) {
    Validator.validateObject(value);

    this._ingredients = value;
  }

  protected validateNameLength(name: string): void {
    Validator.validateObject(name);
    Validator.validateLength(name, Toothpaste.minNameLength, Toothpaste.maxNameLength);
  }

  protected validatePositiveNumber(price: number): void {
    Validator.validatePositiveNumber(price);
  }

  protected validateBrandLength(brand: string): void {
    Validator.validateObject(brand);
    Validator.validateLength(brand, Toothpaste.minBrandLength, Toothpaste.maxBrandLength);
  }

  public print(): string {
    let str = super.print();

    str += `\r\n #Ingredients: ${this.ingredients}\r\n ===`;

    return str;
  }
  // Think about how to extend the print method
}
