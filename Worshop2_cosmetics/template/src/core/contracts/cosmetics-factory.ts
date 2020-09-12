import { ICart } from '../../common/contracts/cart';
import { ICategory } from '../../common/contracts/category';
import { IProduct } from '../../common/contracts/product';
import { GenderType } from '../../models/common/gender-type';
import { UsageType } from '../../models/common/usage-type';
import { ScentType } from '../../models/common/scent-type';

export interface ICosmeticsFactory {
  createCategory(name: string): ICategory;

  createShampoo(name: string, brand: string, price: number, gender: GenderType, milliliters: number, usage: UsageType): IProduct;

  createToothpaste(name: string, brand: string, price: number, gender: GenderType, ingredients: string[]): IProduct;

  createCream(name: string, brand: string, price: number, gender: GenderType, scent: ScentType): IProduct;

  createShoppingCart(): ICart;
}
