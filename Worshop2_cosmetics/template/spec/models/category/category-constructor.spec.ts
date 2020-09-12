import { CosmeticsCategory } from '../../../src/models/cosmetics-category';

describe('Category constructor should', () => {

  it('throw when the name is smaller than min value', () => {
    // Arrange, Act & Assert
    expect(() => new CosmeticsCategory('1')).toThrowError();
  });

  it('throw when the name is larger than max value', () => {
    // Arrange, Act & Assert
    expect(() => new CosmeticsCategory('1'.repeat(20))).toThrowError();
  });

  it('create category when name is valid', () => {
    // Arrange & Act
    const category: CosmeticsCategory = new CosmeticsCategory('test');

    // Assert
    expect(category).toEqual(jasmine.any(CosmeticsCategory));
  });

  it('initialize new list of products when category is created', () => {
    // Arrange & Act
    const category: CosmeticsCategory = new CosmeticsCategory('test');

    // Assert
    expect(category.products.length).toBe(0);
  });
});
