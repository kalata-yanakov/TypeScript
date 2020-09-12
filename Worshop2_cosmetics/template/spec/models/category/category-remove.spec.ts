import { IProduct } from '../../../src/common/contracts/product';
import { CosmeticsCategory } from '../../../src/models/cosmetics-category';
import { productFactory } from '../../utils';
import { CategoryMock } from './category-mock';

describe('Category RemoveProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const category: CosmeticsCategory = new CosmeticsCategory('test');

    // Act & Assert
    expect(() => category.removeProduct(<IProduct><unknown>null)).toThrowError();
  });

  it('remove product when product is valid', () => {
    // Arrange
    const product: IProduct = productFactory.build({ name: 'test1' });
    const product1: IProduct = productFactory.build({ name: 'test2' });
    const category: CategoryMock = new CategoryMock('test', [product, product1]);

    // Act
    category.removeProduct(product);

    // Assert
    expect(category.products.length).toBe(1);
  });

  it('throw when product not found', () => {
    // Arrange
    const product: IProduct = productFactory.build({ name: 'test1' });
    const product1: IProduct = productFactory.build({ name: 'test2' });

    const category: CategoryMock = new CategoryMock('test', [product]);

    // Act & Assert
    expect(() => category.removeProduct(product1)).toThrowError();
  });

  it('remove only one product if there are more than one equal products', () => {
    // Arrange
    const product: IProduct = productFactory.build({ name: 'test1' });

    const category: CategoryMock = new CategoryMock('test', [product, product]);

    // Act
    category.removeProduct(product);

    // Assert
    expect(category.products.length).toBe(1);
  });
});
