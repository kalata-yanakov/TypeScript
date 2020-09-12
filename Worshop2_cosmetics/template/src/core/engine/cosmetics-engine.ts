import { ICategory } from '../../common/contracts/category';
import { IProduct } from '../../common/contracts/product';
import { ShoppingCart } from '../../models/cart/shopping-cart';
import { GenderType } from '../../models/common/gender-type';
import { UsageType } from '../../models/common/usage-type';
import { IEngine } from '../contracts/engine';
import { CosmeticsFactory } from './real-cosmetics-factory';
import { ScentType } from '../../models/common/scent-type';

export class CosmeticsEngine implements IEngine {

  private static readonly SINGLE_INSTANCE: IEngine = new CosmeticsEngine();

  private readonly _shoppingCart: ShoppingCart;

  private readonly _factory: CosmeticsFactory;

  private readonly _categories: Map<string, ICategory>;

  private readonly _products: Map<string, IProduct>;

  private constructor() {
    this._shoppingCart = new ShoppingCart();
    this._factory = new CosmeticsFactory();
    this._categories = new Map();
    this._products = new Map();
  }

  public static get INSTANCE(): IEngine {
    return this.SINGLE_INSTANCE;
  }

  public removeFromShoppingCart(productName: string): string {
    if (!this._products.has(productName)) {
      return `Product ${productName} does not exist!`;
    }

    const product: IProduct = this._products.get(productName);

    if (!this._shoppingCart.containsProduct(product)) {
      return `Shopping cart does not contain product with name ${productName}!`;
    }

    this._shoppingCart.removeProduct(product);

    return `Product ${productName} was removed from the shopping cart!`;
  }

  public addToShoppingCart(productName: string): string {
    if (!this._products.has(productName)) {
      return `Product ${productName} does not exist!`;
    }

    const product: IProduct = this._products.get(productName);
    this._shoppingCart.addProduct(product);

    return `Product ${productName} was added to the shopping cart!`;
  }

  public createShampoo(name: string, brand: string, price: number, gender: GenderType, milliliters: number, usage: UsageType): string {
    if (this._products.has(name)) {
      return `Shampoo with name ${name} already exists!`;
    }

    const shampoo: IProduct = this._factory.createShampoo(name, brand, price, gender, milliliters, usage);
    this._products.set(name, shampoo);

    return `Shampoo with name ${name} was created!`;
  }

  public createToothpaste(name: string, brand: string, price: number, gender: GenderType, ingredients: string[]): string {
    if (this._products.has(name)) {
      return `Toothpaste with name ${name} already exists!`;
    }

    const toothpaste: IProduct = this._factory.createToothpaste(name, brand, price, gender, ingredients);
    this._products.set(name, toothpaste);

    return `Toothpaste with name ${name} was created!`;
  }

  public createCream(name: string, brand: string, price: number, gender: GenderType, scent: ScentType): string {
    if (this._products.has(name)) {
      return `Cream with name ${name} already exists!`;
    }

    const cream: IProduct = this._factory.createCream(name, brand, price, gender, scent);
    this._products.set(name, cream);

    return `Cream with name ${name} was created!`;
  }


  public showCategory(categoryName: string): string {
    if (!this._categories.has(categoryName)) {
      return `Category ${categoryName} does not exist!`;
    }

    const category: ICategory = this._categories.get(categoryName);

    return category.print();
  }

  public removeFromCategory(categoryNameToRemoveFrom: string, productToRemove: string): string {
    if (!this._categories.has(categoryNameToRemoveFrom)) {
      return `Category ${categoryNameToRemoveFrom} does not exist!`;
    }

    if (!this._products.has(productToRemove)) {
      return `Product ${productToRemove} does not exist!`;
    }

    const category: ICategory = this._categories.get(categoryNameToRemoveFrom);
    const product: IProduct = this._products.get(productToRemove);

    category.removeProduct(product);

    return `Product ${productToRemove} removed from category ${categoryNameToRemoveFrom}!`;
  }

  public addToCategory(categoryNameToAdd: string, productToAdd: string): string {
    if (!this._categories.has(categoryNameToAdd)) {
      return `Category ${categoryNameToAdd} does not exist!`;
    }

    if (!this._products.has(productToAdd)) {
      return `Product ${productToAdd} does not exist!`;
    }

    const category: ICategory = this._categories.get(categoryNameToAdd);
    const product: IProduct = this._products.get(productToAdd);

    category.addProduct(product);

    return `Product ${productToAdd} added to category ${categoryNameToAdd}!`;
  }

  public createCategory(categoryName: string): string {
    if (this._categories.has(categoryName)) {
      return `Category with name ${categoryName} already exists!`;
    }

    const category: ICategory = this._factory.createCategory(categoryName);
    this._categories.set(categoryName, category);

    return `Category with name ${categoryName} was created!`;
  }

  public getTotalPrice(): string {
    return this._shoppingCart.productList.length > 0 ?
      `\$${this._shoppingCart.totalPrice()} total price currently in the shopping cart!` :
      `No product in shopping cart!`;
  }
}
