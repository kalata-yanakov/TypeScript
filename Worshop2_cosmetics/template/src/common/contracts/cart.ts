import { Product } from '../../models/products/generic-product';
import { IProduct } from './product';

// tslint:disable-next-line: no-empty-interface
export interface ICart {

  productList: IProduct[];
  // Which methods should be here?
  // Write them
  // Use Product interface
  addProduct(product: IProduct): void;
  removeProduct(product: IProduct): void;
  containsProduct(product: IProduct): boolean;
  totalPrice(): number;
}
