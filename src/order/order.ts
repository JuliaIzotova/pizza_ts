import { DOUGH_TYPE, IMeal, PIZZA_SIZE } from '../data/types';
import { PIZZA_NAMES } from '../data/receipts';
import { TOPPINGS } from '../data/prices';
import { Pizza } from '../meal/pizza';
import { ERROR_MESSAGES } from '../data/messages';

export class Order {
  private pizzaStorage: IMeal[] = [];
  constructor(public orderID: number, public meals: IMeal[] = []) {
    this.pizzaStorage.push(...meals);
  }
  addPizza(
    name: PIZZA_NAMES,
    basePrice: number,
    doughType: DOUGH_TYPE,
    size: PIZZA_SIZE,
    additionalToppings?: (keyof typeof TOPPINGS) []
  ) { 
    const pizza = new Pizza(name, doughType, size, basePrice); 
    if (additionalToppings && additionalToppings.length > 0) {
        pizza.additionalToppings = [...additionalToppings];
    }

    this.pizzaStorage.push(pizza); 
    return pizza; 
  }
  getMeals(): IMeal[] {
    return this.pizzaStorage.map (pizza => {
        const pizzaWithoutToppings = {...pizza};

        if (!pizzaWithoutToppings.additionalToppings || pizzaWithoutToppings.additionalToppings.length === 0) {
            delete pizzaWithoutToppings.additionalToppings;
        }
    return pizzaWithoutToppings
    });
}
  getFullPrice(): number {
    return this.pizzaStorage.reduce((total, meal) => total + meal.getPrice(), 0);
  }

  public removeFromOrder(name: PIZZA_NAMES) {
    const mealIndex = this.pizzaStorage.findIndex(meal => meal.name === name);
    if (mealIndex === -1) {
        throw new Error(ERROR_MESSAGES.PIZZA_NOT_FOUND);
      }
        this.pizzaStorage.splice(mealIndex, 1);
    }
}