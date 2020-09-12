import { ShoppingCart } from '../../../src/models/cart/shopping-cart';

describe('ShoppingCart constructor should', () => {

  it('initialize new list of products when cart is created', () => {
    // Arrange & Act
    const cart: ShoppingCart = new ShoppingCart();

    // Assert
    expect(cart.productList.length).toBe(0);
  });
});
