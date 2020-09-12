import { ICart } from '../../../src/common/contracts/cart';
import { IProduct } from '../../../src/common/contracts/product';
import { ShoppingCart } from '../../../src/models/cart/shopping-cart';
import { productFactory } from '../../utils';

describe('ShoppingCart AddProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const cart: any = new ShoppingCart();

    // Act & Assert
    expect(() => cart.addProduct(<IProduct><unknown>null)).toThrowError();
  });

  it('add product when product is valid', () => {
    // Arrange
    const cart: any = new ShoppingCart();
    const product: IProduct = productFactory.build({ name: 'test1' });

    // Act
    cart.addProduct(product);
    cart.addProduct(product);

    // Assert
    expect(cart.productList.length).toBe(2);
  });
});
