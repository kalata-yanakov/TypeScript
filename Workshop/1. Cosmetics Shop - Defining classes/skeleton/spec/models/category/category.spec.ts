import { Product } from '../../../src/models/products/product';
import { productFactory } from '../../utils';
import { Category } from './../../../src/models/category';
import { CategoryMock } from './category-mock';

describe('Category constructor should', () => {

  it('throw when the name is smaller than min value', () => {
    // Arrange, Act & Assert
    expect(() => new Category('1')).toThrowError();
  });

  it('throw when the name is larger than max value', () => {
    // Arrange, Act & Assert
    expect(() => new Category('1'.repeat(20))).toThrowError();
  });

  it('create category when name is valid', () => {
    // Arrange & Act
    const category: Category = new Category('test');

    // Assert
    expect(category).toEqual(jasmine.any(Category));
  });

  it('initialize new list of products when category is created', () => {
    // Arrange & Act
    const category: Category = new Category('test');

    // Assert
    expect(category.products.length).toBe(0);
  });
});

describe('Category AddProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const category: Category = new Category('test');

    // Act & Assert
    expect(() => category.addProduct(<Product>null)).toThrowError();
  });

  it('add product when product is valid', () => {
    // Arrange
    const category: Category = new Category('test');
    const product: Product = productFactory.build();

    // Act
    category.addProduct(product);
    category.addProduct(product);

    // Assert
    expect(category.products.length).toBe(2);
  });

});

describe('Category RemoveProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const category: Category = new Category('test');

    // Act & Assert
    expect(() => category.removeProduct(<Product>null)).toThrowError();
  });

  it('remove product when product is valid', () => {
    // Arrange
    const product: Product = productFactory.build();
    const product1: Product = productFactory.build();
    const category: CategoryMock = new CategoryMock('test', [product, product1]);

    // Act
    category.removeProduct(product);

    // Assert
    expect(category.products.length).toBe(1);
  });

  it('throw when product not found', () => {
    // Arrange
    const product: Product = productFactory.build({ name: 'test1' });
    const product1: Product = productFactory.build({ name: 'test2' });

    const category: CategoryMock = new CategoryMock('test', [product]);

    // Act & Assert
    expect(() => category.removeProduct(product1)).toThrowError();
  });

  it('remove only one product if there are more than one equal products', () => {
    // Arrange
    const product: Product = productFactory.build();
    const category: CategoryMock = new CategoryMock('test', [product, product]);

    // Act
    category.removeProduct(product);

    // Assert
    expect(category.products.length).toBe(1);
  });
});
