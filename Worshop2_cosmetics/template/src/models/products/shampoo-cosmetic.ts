import { isFloat, isLength } from 'validator';
import { IShampoo } from '../../common/contracts/shampoo';
import { GenderType } from '../common/gender-type';
import { UsageType } from '../common/usage-type';
import { Product } from './generic-product';
import { Validator } from '../../common/contracts/validators';

export class Shampoo extends Product implements IShampoo {
  
  protected static readonly minNameLength: number = 3;
  protected static readonly maxNameLength: number = 10;
  protected static readonly minBrandLength: number = 2;
  protected static readonly maxBrandLength: number = 10;
  protected static readonly minPrice: number = 0;

  private _milliliters: number;
  private _usage: UsageType;
 

  public constructor(
    name: string,
    brand: string,
    price: number,
    gender: GenderType,
    milliliters: number,
    usage: UsageType) {

    super(name, brand, price, gender);
    this.milliliters = milliliters;
    this.usage = usage;
  }

  public get milliliters(): number {
    return this._milliliters;
  }

  public set milliliters(value: number) {
    Validator.validatePositiveNumber(this.milliliters);
    this._milliliters = value;
  }

  public get usage(): UsageType {
    return this._usage;
  }

  public set usage(value: UsageType) {
    this._usage = value;
  }

  protected validateNameLength(name: string): void {
    Validator.validateObject(name);
    Validator.validateLength(name, Shampoo.minNameLength, Shampoo.maxNameLength);
  }

  protected validatePositiveNumber(price: number): void {
    Validator.validatePositiveNumber(price);
  }

  protected validateBrandLength(brand: string): void {
    Validator.validateObject(brand);
    Validator.validateLength(brand, Shampoo.minBrandLength, Shampoo.maxBrandLength);
  }

  // Think about how to extend the print method
  public print(): string {
    let str = super.print();
    str += `
 #Milliliters: ${this.milliliters}
 #Usage: ${UsageType[this.usage]}
 ===`;
    return str;

  }
}
