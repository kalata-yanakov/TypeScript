import { GenderType } from '../../../src/models/common/gender-type';
import { Product } from '../../../src/models/products/product';

describe('Product constructor should', () => {

  it('throw when the name is smaller than min value', () => {
    // Arrange, Act & Assert
    expect(() => new Product('n', 'brand', 10, GenderType.Men)).toThrowError();
  });

  it('throw when the name is larger than max value', () => {
    // Arrange, Act & Assert
    expect(() => new Product('n'.repeat(20), 'brand', 10, GenderType.Men)).toThrowError();
  });

  it('throw when the brand is smaller than min value', () => {
    // Arrange, Act & Assert
    expect(() => new Product('name', 'b', 10, GenderType.Men)).toThrowError();
  });

  it('throw when the brand is larger than max value', () => {
    // Arrange, Act & Assert
    expect(() => new Product('name', 'b'.repeat(20), 10, GenderType.Men)).toThrowError();
  });

  it('throw when the price is negative', () => {
    // Arrange, Act & Assert
    expect(() => new Product('name', 'brand', -2, GenderType.Men)).toThrowError();
  });

  it('create product when name is valid', () => {
    // Arrange & Act
    const category: Product = new Product('test', 'brand', 10, GenderType.Men);

    // Assert
    expect(category).toEqual(jasmine.any(Product));
  });
});
