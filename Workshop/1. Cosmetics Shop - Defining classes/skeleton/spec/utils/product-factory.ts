import { GenderType } from '../../src/models/common/gender-type';
import { Product } from '../../src/models/products/product';

let i: number = 0;

export const productFactory: { build(partial?: Partial<Product & any>): Product } = {
  build(partial?: Partial<Product>): Product & any {
    if (![null, undefined].includes(partial)) {
      return {
        ... new Product(`name${String(i++)}`, 'test', 10, GenderType.Men),
        ...partial,
        print(): string { return 'test'; }
      };
    }

    return new Product(`name${String(i++)}`, 'test', 10, GenderType.Men);
  }
};