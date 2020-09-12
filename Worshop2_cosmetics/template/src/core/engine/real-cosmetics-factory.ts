import { ICategory } from '../../common/contracts/category';
import { ShoppingCart } from '../../models/cart/shopping-cart';
import { GenderType } from '../../models/common/gender-type';
import { UsageType } from '../../models/common/usage-type';
import { Shampoo } from '../../models/products/shampoo-cosmetic';
import { Toothpaste } from '../../models/products/toothpaste-cosmetic';
import { ICosmeticsFactory } from '../contracts/cosmetics-factory';
import { CosmeticsCategory } from '../../models/cosmetics-category';
import { ScentType } from '../../models/common/scent-type';
import { Cream } from '../../models/products/cream-product';

export class CosmeticsFactory implements ICosmeticsFactory {
  public createCategory(name: string): ICategory {
    // throw new Error('Not implemented!');
    return new CosmeticsCategory(name);
  }

  public createShampoo(name: string, brand: string, price: number, gender: GenderType, milliliters: number, usage: UsageType): Shampoo {
    // throw new Error('Not implemented!');
    return new Shampoo(name, brand, price, gender, milliliters, usage);
  }

  public createToothpaste(name: string, brand: string, price: number, gender: GenderType, ingredients: string[]): Toothpaste {
    // throw new Error('Not implemented!');
    return new Toothpaste(name, brand, price, gender, ingredients.join(', '));
  }

  public createCream(name: string, brand: string, price: number, gender: GenderType, scent: ScentType): Cream {
    // throw new Error('Not implemented!');
    return new Cream(name, brand, price, gender, scent);
  }


  public createShoppingCart(): ShoppingCart {
    // throw new Error('Not implemented!');
    return new ShoppingCart();
  }

}
