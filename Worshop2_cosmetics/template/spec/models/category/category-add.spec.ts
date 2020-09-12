import { IProduct } from '../../../src/common/contracts/product';
import { CosmeticsCategory } from '../../../src/models/cosmetics-category';
import { productFactory } from '../../utils';

describe('Category AddProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const category: CosmeticsCategory = new CosmeticsCategory('test');

    // Act & Assert
    expect(() => category.addProduct(<IProduct><unknown>null)).toThrowError();
  });

  it('add product when product is valid', () => {
    // Arrange
    const category: CosmeticsCategory = new CosmeticsCategory('test');
    const product: IProduct = productFactory.build({ name: 'test1' });

    // Act
    category.addProduct(product);
    category.addProduct(product);

    // Assert
    expect(category.products.length).toBe(2);
  });

});
