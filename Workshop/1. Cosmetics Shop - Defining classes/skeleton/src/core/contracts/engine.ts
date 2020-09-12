import { GenderType } from '../../models/common/gender-type';

export interface IEngine {
  printReports(): void;
  removeFromShoppingCart(productName: string): void;
  addToShoppingCart(productName: string): void;
  createProduct(name: string, brand: string, price: number, gender: GenderType): void;
  showCategory(categoryName: string): void;
  removeFromCategory(categoryNameToRemoveFrom: string, productToRemove: string): void;
  addToCategory(categoryNameToAdd: string, productToAdd: string): void;
  createCategory(categoryName: string): void;
  totalPrice(): void;
}
