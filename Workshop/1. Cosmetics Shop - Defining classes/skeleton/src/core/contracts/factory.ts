import { ShoppingCart } from '../../models/cart/shopping-cart';
import { Category } from '../../models/category';
import { GenderType } from '../../models/common/gender-type';
import { Product } from '../../models/products/product';

export interface ICosmeticsFactory {
  createCategory(name: string): Category;
  createProduct(name: string, brand: string, price: number, gender: GenderType): Product;
  shoppingCart(): ShoppingCart;
}
