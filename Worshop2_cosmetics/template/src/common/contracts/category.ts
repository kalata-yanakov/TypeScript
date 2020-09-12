import { IProduct } from './product';

export interface ICategory {
  name: string;

  addProduct(product: IProduct): void;

  removeProduct(product: IProduct): void;

  print(): string;
}
