import { Pizzeria } from './pizzeria/pizzeria';
import { DOUGH_TYPE, PIZZA_SIZE } from './data/types';
import { PIZZA_NAMES } from './data/receipts';

const pizzeria = new Pizzeria ('pizza eat', 'spb', '8-20');
const order = pizzeria.createOrder();
order.addPizza(
  PIZZA_NAMES.BBQ,
  DOUGH_TYPE.THIN, 
  PIZZA_SIZE.LARGE,
  ['bacon']
);
order.addPizza(
  PIZZA_NAMES.TRUFFLE,
  DOUGH_TYPE.THIN,
  PIZZA_SIZE.LARGE,
  ['tomato', 'ham']
);
order.addPizza(
    PIZZA_NAMES.PEPPERONI,
    DOUGH_TYPE.THIN,
    PIZZA_SIZE.MEDIUM
)
order.removeFromOrder(PIZZA_NAMES.TRUFFLE);
console.log(order.getMeals());
console.log(`Стоимость заказа: ${order.getFullPrice()}`);