import { GenderType } from '../../models/common/gender-type';
import { UsageType } from '../../models/common/usage-type';
import { ScentType } from '../../models/common/scent-type';

export interface IEngine {
  removeFromShoppingCart(productName: string): string;
  addToShoppingCart(productName: string): string;
  createShampoo(name: string, brand: string, price: number, gender: GenderType, milliliters: number, usage: UsageType): string;
  createToothpaste(name: string, brand: string, price: number, gender: GenderType, ingredients: string[]): string;
  createCream(name: string, brand: string, price: number, gender: GenderType, scent: ScentType): string;
  showCategory(categoryName: string): string;
  removeFromCategory(categoryNameToRemoveFrom: string, productToRemove: string): string;
  addToCategory(categoryNameToAdd: string, productToAdd: string): string;
  createCategory(categoryName: string): string;
  getTotalPrice(): string;
}
