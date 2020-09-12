import { Product } from "./generic-product";
import { ICream } from "../../common/contracts/cream";
import { ScentType } from "../common/scent-type";
import { GenderType } from "../common/gender-type";
import { Validator } from "../../common/contracts/validators";

export class Cream extends Product implements ICream{

  protected static readonly minNameLength: number = 3;
  protected static readonly maxNameLength: number = 15;
  protected static readonly minBrandLength: number = 3;
  protected static readonly maxBrandLength: number = 15;
  protected static readonly minPrice: number = 0;

  private _scent: ScentType;

  constructor(
    name: string,
    brand: string,
    price: number,
    gender: GenderType,
    scent: ScentType
    ) {
      super(name, brand, price, gender)
      this._scent = scent;
    }

    public get scent() {
      return this._scent;
    }

    public set scent(value: ScentType) {
      this._scent = value;
    }

    protected validateNameLength(name: string): void {
      Validator.validateObject(name);
      Validator.validateLength(name, Cream.minNameLength, Cream.maxNameLength);
    }
  
    protected validatePositiveNumber(price: number): void {
      Validator.validatePositiveNumber(price);
    }
  
    protected validateBrandLength(brand: string): void {
      Validator.validateObject(brand);
      Validator.validateLength(brand, Cream.minBrandLength, Cream.maxBrandLength);
    }

    public print(): string {
      let str = super.print();
      str += `
 #Scent: ${ScentType[this.scent]}
 ===`;
      return str;
    }
}