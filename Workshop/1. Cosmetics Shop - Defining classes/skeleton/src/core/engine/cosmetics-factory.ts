import { ShoppingCart } from '../../models/cart/shopping-cart';
import { Category } from '../../models/category';
import { GenderType } from '../../models/common/gender-type';
import { Product } from '../../models/products/product';
import { ICosmeticsFactory } from '../contracts/factory';

export class CosmeticsFactory implements ICosmeticsFactory {
  public createCategory(name: string): Category {

    return new Category(name);
  }

  public createProduct(name: string, brand: string, price: number, gender: GenderType): Product {

    return new Product(name, brand, price, gender);
  }

  public shoppingCart(): ShoppingCart {
    return new ShoppingCart();
  }
}
