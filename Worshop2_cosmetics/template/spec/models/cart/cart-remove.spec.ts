import { ICart } from '../../../src/common/contracts/cart';
import { IProduct } from '../../../src/common/contracts/product';
import { ShoppingCart } from '../../../src/models/cart/shopping-cart';
import { productFactory } from '../../utils';

describe('ShoppingCart RemoveProduct should', () => {

  it('throw when the product is null', () => {
    // Arrange
    const cart: ICart = new ShoppingCart();

    // Act & Assert
    expect(() => cart.removeProduct(<IProduct><unknown>null)).toThrowError();
  });

  it('remove product when it is found', () => {
    // Arrange
    const cart: ICart = new ShoppingCart();
    let product: IProduct;

    product = productFactory.build({name: 'test'});
    cart.productList.push(product);

    // Act
    cart.removeProduct(product);

    // Assert
    expect(cart.productList.length).toBe(0);
  });
});
