import * as Factory from 'factory.ts';
import { IProduct } from '../../src/common/contracts/product';
import { GenderType } from '../../src/models/common/gender-type';

export const productFactory: Factory.Sync.Factory<IProduct> = Factory.Sync.makeFactory<IProduct>({
  name: Factory.each((i: number) => `name${i.toString()}`),
  brand: 'test',
  price: 10,
  gender: GenderType.Men,
  print: ((): string => 'test')
});
