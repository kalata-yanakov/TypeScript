import { IProduct } from '../../common/contracts/product';
import { GenderType } from '../common/gender-type';
import { Validator } from '../../common/contracts/validators';


export abstract class Product implements IProduct {

  protected _name: string;
  protected _brand: string;
  protected _price: number;
  protected _gender: GenderType;

  constructor(name: string, brand: string, price: number, gender: GenderType) {

    // Validator.validateObject(name);
    // Validator.validateLength(name, this.minNameLength, this.maxNameLength);
    // Validator.validateObject(brand);
    // Validator.validateLength(brand, this.minBrandLength, this.maxBrandLength);
    // Validator.validatePositiveNumber(price);

    this.name = name;
    this.brand = brand;
    this.price = price;
    this.gender = gender;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    Validator.validateObject(value);
    this.validateNameLength(value);
    this._name = value;
  }

  public get brand(): string {
    return this._brand;
  }

  public set brand(value: string) {
    Validator.validateObject(value);
    this.validateBrandLength(value);
    this._brand = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this.validatePositiveNumber(value);
    this._price = value;
  }

  public get gender(): GenderType {
    return this._gender;
  }

  public set gender(value: GenderType) {
    this._gender = value;
  }

  protected abstract validateNameLength(name: string): void;
  protected abstract validatePositiveNumber(price: number): void;
  protected abstract validateBrandLength(brand: string): void;

  
  public print(): string {
    return `#${this.name} ${this.brand}
 #Price: $${this.price}
 #Gender: ${GenderType[this.gender]}`;
  }

}
