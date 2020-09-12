import { UsageType } from '../../models/common/usage-type';
import { IProduct } from './product';

// tslint:disable-next-line:no-empty-interface
export interface IShampoo extends IProduct {
  milliliters: number;
  usage: UsageType;

  
}
