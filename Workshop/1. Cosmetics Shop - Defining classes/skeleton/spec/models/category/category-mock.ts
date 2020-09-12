import { Category } from '../../../src/models/category';
import { Product } from '../../../src/models/products/product';

export class CategoryMock extends Category {

  constructor(name: string, data: Product[]) {
    super(name);

    this.mockProductsData = data;
  }
}
