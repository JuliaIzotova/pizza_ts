import { Pizzeria } from './pizzeria/pizzeria';
import { DOUGH_TYPE, PIZZA_SIZE } from './data/types';
import { PIZZA_NAMES } from './data/receipts';

const pizzeria = new Pizzeria ('pizza eat', 'spb', '8-20');
const order = pizzeria.createOrder();
order.addPizza(
  PIZZA_NAMES.BBQ,
  500,
  DOUGH_TYPE.CLASSIC, 
  PIZZA_SIZE.LARGE,
  ['bacon']
);
order.addPizza(
  PIZZA_NAMES.TRUFFLE,
  800,
  DOUGH_TYPE.THIN,
  PIZZA_SIZE.LARGE,
  ['tomato', 'ham']
);
order.addPizza(
    PIZZA_NAMES.PEPPERONI,
    600,
    DOUGH_TYPE.THIN,
    PIZZA_SIZE.MEDIUM
)
order.removeFromOrder(PIZZA_NAMES.TRUFFLE);
console.log(order.getMeals());
console.log(`Стоимость заказа: ${order.getFullPrice()}`);