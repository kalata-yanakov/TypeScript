import { IEngine } from './core/contracts/engine';
import { CosmeticsEngine } from './core/engine/cosmetics-engine';
import { GenderType } from './models/common/gender-type';
import { UsageType } from './models/common/usage-type';
import { ScentType } from './models/common/scent-type';

const main: () => void = (): void => {
  try {

    const engine: IEngine = CosmeticsEngine.INSTANCE;
    const reports: string[] = [
      engine.createShampoo('MyMan', 'Nivea', 10.99, GenderType.Men, 1000, UsageType.EveryDay),
      engine.createShampoo('MyGeneric', 'Abc', 10.99, GenderType.Men, 1000, UsageType.EveryDay),
      engine.createShampoo('MyWoman', 'Abc', 20.99, GenderType.Women, 1000, UsageType.EveryDay),
      engine.createToothpaste('White', 'Colgate', 10.99, GenderType.Men, ['calcium', 'fluoride']),
      engine.createCream('Classic', 'Karo', 2.30, GenderType.Men, ScentType.Rose),
      engine.createCategory('Shampoos'),
      engine.createCategory('Toothpastes'),
      engine.createCategory('Creams'),
      engine.addToCategory('Shampoos', 'MyMan'),
      engine.addToCategory('Shampoos', 'MyGeneric'),
      engine.addToCategory('Shampoos', 'MyWoman'),
      engine.addToCategory('Toothpastes', 'White'),
      engine.addToCategory('Creams', 'Classic'),
      engine.addToShoppingCart('MyMan'),
      engine.addToShoppingCart('White'),
      engine.showCategory('Shampoos'),
      engine.showCategory('Toothpastes'),
      engine.getTotalPrice(),
      engine.removeFromCategory('Shampoos', 'MyMan'),
      engine.showCategory('Shampoos'),
      engine.removeFromShoppingCart('MyMan'),
      engine.getTotalPrice(),
      engine.showCategory('Creams'),
      engine.addToShoppingCart('Classic'),
      engine.getTotalPrice(),
      ];

    console.log(reports.join('\n'));
  } catch (error) {
    console.log(error);
  }
};

main();
