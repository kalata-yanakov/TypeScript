import { IProduct } from '../../../src/common/contracts/product';
import { CosmeticsCategory } from '../../../src/models/cosmetics-category';

export class CategoryMock extends CosmeticsCategory {

  constructor(name: string, data: IProduct[]) {
    super(name);

    this.mockProductsData = data;
  }
}
