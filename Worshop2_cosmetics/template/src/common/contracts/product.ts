import { GenderType } from '../../models/common/gender-type';

export interface IProduct {

  name: string;
  brand: string;
  price: number;
  gender: GenderType;
  print(): string;
}
