import { IEngine } from './core/contracts/engine';
import { Engine } from './core/engine/engine';
import { GenderType } from './models/common/gender-type';

const start: () => void = (): void => {
  const engine: IEngine = Engine.INSTANCE;

  engine.createProduct('MyMan', 'Nivea', 10.99, GenderType.Men);
  engine.createProduct('MyWoman', 'Nivea', 20.99, GenderType.Women);
  engine.createProduct('Shampoo', 'Abc', 20.99, GenderType.Unisex);
  engine.createCategory('Shampoos');
  engine.addToCategory('Shampoos', 'MyMan');
  engine.addToCategory('Shampoos', 'MyWoman');
  engine.addToCategory('Shampoos', 'Shampoo');
  engine.addToShoppingCart('MyMan');
  engine.showCategory('Shampoos');
  engine.totalPrice();
  engine.removeFromCategory('Shampoos', 'MyMan');
  engine.showCategory('Shampoos');
  engine.removeFromShoppingCart('MyMan');
  engine.totalPrice();

  engine.printReports();
};

start();
