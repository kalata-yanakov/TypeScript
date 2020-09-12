import { ShoppingCart } from '../../models/cart/shopping-cart';
import { Category } from '../../models/category';
import { GenderType } from '../../models/common/gender-type';
import { Product } from '../../models/products/product';
import { IEngine } from '../contracts/engine';
import { CosmeticsFactory } from './cosmetics-factory';

export class Engine implements IEngine {

  private static readonly SINGLE_INSTANCE: Engine = new Engine();

  private readonly _shoppingCart: ShoppingCart;

  private readonly _factory: CosmeticsFactory;

  private readonly _categories: Map<string, Category>;

  private readonly _products: Map<string, Product>;

  private readonly _reports: string[] = [];

  private constructor() {
    this._shoppingCart = new ShoppingCart();
    this._factory = new CosmeticsFactory();
    this._categories = new Map();
    this._products = new Map();
  }

  public static get INSTANCE(): Engine {
    return this.SINGLE_INSTANCE;
  }

  public printReports(): void {
    console.log(this._reports.join('\n'));
  }

  public removeFromShoppingCart(productName: string): void {
    if (!this._products.has(productName)) {
      this._reports.push(`Product ${productName} does not exist!`);
    }

    const product: Product | undefined = this._products.get(productName);

    if (!this._shoppingCart.containsProduct(<Product>product)) {
      this._reports.push(`Shopping cart does not contain product with name ${productName}!`);
    }

    this._shoppingCart.removeProduct(<Product>product);

    this._reports.push(`Product ${productName} was removed from the shopping cart!`);
  }

  public addToShoppingCart(productName: string): void {
    if (!this._products.has(productName)) {
      this._reports.push(`Product ${productName} does not exist!`);
    }

    const product: Product | undefined = this._products.get(productName);
    this._shoppingCart.addProduct(<Product>product);

    this._reports.push(`Product ${productName} was added to the shopping cart!`);
  }

  public createProduct(name: string, brand: string, price: number, gender: GenderType): void {
    if (this._products.has(name)) {
      this._reports.push(`Product with name ${name} already exists!`);
    }

    const product: Product = this._factory.createProduct(name, brand, price, gender);
    this._products.set(name, product);

    this._reports.push(`Product with name ${name} was created!`);
  }

  public showCategory(categoryName: string): void {
    if (!this._categories.has(categoryName)) {
      this._reports.push(`Category ${categoryName} does not exist!`);
    }

    const category: Category | undefined = this._categories.get(categoryName);

    this._reports.push((<Category>category).print());
  }

  public removeFromCategory(categoryNameToRemoveFrom: string, productToRemove: string): void {
    if (!this._categories.has(categoryNameToRemoveFrom)) {
      this._reports.push(`Category ${categoryNameToRemoveFrom} does not exist!`);
    }

    if (!this._products.has(productToRemove)) {
      this._reports.push(`Product ${productToRemove} does not exist!`);
    }

    const category: Category | undefined = this._categories.get(categoryNameToRemoveFrom);
    const product: Product | undefined = this._products.get(productToRemove);

    (<Category>category).removeProduct(<Product>product);

    this._reports.push(`Product ${productToRemove} removed from category ${categoryNameToRemoveFrom}!`);
  }

  public addToCategory(categoryNameToAdd: string, productToAdd: string): void {
    if (!this._categories.has(categoryNameToAdd)) {
      this._reports.push(`Category ${categoryNameToAdd} does not exist!`);
    }

    if (!this._products.has(productToAdd)) {
      this._reports.push(`Product ${productToAdd} does not exist!`);
    }

    const category: Category | undefined = this._categories.get(categoryNameToAdd);
    const product: Product | undefined = this._products.get(productToAdd);

    (<Category>category).addProduct(<Product>product);

    this._reports.push(`Product ${productToAdd} added to category ${categoryNameToAdd}!`);
  }

  public createCategory(categoryName: string): void {
    if (this._categories.has(categoryName)) {
      this._reports.push(`Category with name ${categoryName} already exists!`);
    }

    const category: Category = this._factory.createCategory(categoryName);
    this._categories.set(categoryName, category);

    this._reports.push(`Category with name ${categoryName} was created!`);
  }

  public totalPrice(): void {
    this._reports.push(
      this._shoppingCart.productList.length > 0 ?
        `\$${this._shoppingCart.totalPrice()} total price currently in the shopping cart!` :
        `No product in shopping cart!`
    );
  }
}
