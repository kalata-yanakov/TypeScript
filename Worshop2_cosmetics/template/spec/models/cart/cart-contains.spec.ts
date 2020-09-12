import { ICart } from '../../../src/common/contracts/cart';
import { IProduct } from '../../../src/common/contracts/product';
import { ShoppingCart } from '../../../src/models/cart/shopping-cart';

describe('ShoppingCart AddProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const cart: ICart = new ShoppingCart();

    // Act & Assert
    expect(() => cart.containsProduct(<IProduct><unknown>null)).toThrowError();
  });

  it('return true when the product is found', () => {
    // Arrange
    const cart: ICart = new ShoppingCart();
    let product: IProduct;

    product = jasmine.createSpyObj('IProduct', ['constructor']);
    cart.productList.push(product);

    // Act
    const isFound: boolean = cart.containsProduct(product);

    // Assert
    expect(isFound).toBe(true);
  });

  it('return false when the product is not found', () => {
    // Arrange
    const cart: ICart = new ShoppingCart();
    let product: IProduct;

    product = jasmine.createSpyObj('IProduct', ['constructor']);

    // Act
    const isFound: boolean = cart.containsProduct(product);

    // Assert
    expect(isFound).toBe(false);
  });
});
