import { IProduct } from '../../../src/common/contracts/product';
import { GenderType } from '../../../src/models/common/gender-type';
import { UsageType } from '../../../src/models/common/usage-type';
import { Product } from '../../../src/models/products/generic-product';
import { Shampoo } from '../../../src/models/products/shampoo-cosmetic';
import { Toothpaste } from '../../../src/models/products/toothpaste-cosmetic';
import { Cream } from '../../../src/models/products/cream-product';
import { ScentType } from '../../../src/models/common/scent-type';

describe('Product constructor should', () => {

  it('throw when the name or undefined is null', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo(null, 'brand', 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
    expect(() => new Shampoo(undefined, 'brand', 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('throw when the brand or undefined is null', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo('test', null, 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
    expect(() => new Shampoo('test', undefined, 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('throw when the name is smaller than min value', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo('n', 'brand', 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('throw when the name is larger than max value', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo('n'.repeat(20), 'brand', 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('throw when the brand is smaller than min value', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo('name', 'b', 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('throw when the brand is larger than max value', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo('name', 'b'.repeat(20), 10, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('throw when the price is negative', () => {
    // Arrange, Act & Assert
    expect(() => new Shampoo('name', 'brand', -1, GenderType.Men, 1000, UsageType.EveryDay)).toThrowError();
  });

  it('create product when name is valid', () => {
    // Arrange & Act
    const product: IProduct = new Shampoo('name', 'brand', 10, GenderType.Men, 1000, UsageType.EveryDay);

    // Assert
    expect(product).toEqual(jasmine.any(Product));
  });

  it('create toothpaste when valid values are passed', () => {
    // Arrange & Act
    const product: IProduct = new Toothpaste('name', 'brand', 10, GenderType.Men, 'calcium,flouride');

    // Assert
    expect(product).toEqual(jasmine.any(Product));
  });

  it('throw when ingredients are null or undefined', () => {

    // Arrange, Act & Assert
    expect(() => new Toothpaste('name', 'brand', 10, GenderType.Men, null)).toThrowError();
    expect(() => new Toothpaste('name', 'brand', 10, GenderType.Men, undefined)).toThrowError();
  });

  it('create cream when valid values are passed', () => {
    // Arrange & Act
    const product: IProduct = new Cream('name', 'brand', 2, GenderType.Men, ScentType.Rose);

    // Assert
    expect(product).toEqual(jasmine.any(Product));
  });

  
});
