import { PIZZA_NAMES, pizzaReceipts } from '../data/receipts';
import { PIZZA_SIZE, DOUGH_TYPE } from '../data/types';
import { Meal } from './meal';
import { TOPPINGS } from '../data/prices';


export class Pizza extends Meal {
  public basePrice: number;
  private baseToppingsPrice: number;
  private additionalToppingsPrice: number;
  constructor(
    name: PIZZA_NAMES,
    public doughType: DOUGH_TYPE,
    public size: PIZZA_SIZE,
    public additionalToppings?: (keyof typeof TOPPINGS)[]
  ) {
    super(name);

    const recipe = pizzaReceipts[name];
    this.basePrice = recipe.basePrice;
    this.additionalToppings = additionalToppings ?? [];
    this.baseToppingsPrice = this.calculateToppingsPrice(
      recipe.toppings as (keyof typeof TOPPINGS)[] 
    );
    this.additionalToppingsPrice = this.calculateToppingsPrice(this.additionalToppings ?? []);
    this.totalPrice = this.calculatePrice();
  }

  getPrice(): number {
    return this.totalPrice;
  }

 calculatePrice(): number {
    return this.basePrice * this.doughType * this.size + this.baseToppingsPrice + this.additionalToppingsPrice;
  }

 calculateToppingsPrice(toppings: (keyof typeof TOPPINGS)[]): number {
    return toppings.reduce((total, topping) => {
      return total + TOPPINGS[topping];
    }, 0);
  }
}