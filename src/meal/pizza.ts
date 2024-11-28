import { Meal } from './meal';
import { pizzaReceipts, PIZZA_NAMES } from '../data/receipts';
import { DOUGH_TYPE, PIZZA_SIZE } from '../data/types';
import { TOPPINGS } from '../data/prices';


export class Pizza extends Meal {
  public finalPrice: number;
  constructor(
    readonly name: PIZZA_NAMES,
    public doughType: DOUGH_TYPE,
    public size: PIZZA_SIZE,
    public basePrice: number,
    public additionalToppings?: (keyof typeof TOPPINGS)[]
  ) {
    super(name, basePrice);
    this.finalPrice = this.calculatePrice();
  }
   calculatePrice(): number {
    let price = pizzaReceipts[this.name].prices[this.size] + this.basePrice;
    if (this.additionalToppings) {
      price += this.additionalToppings.reduce((sum, topping) => {
        return sum + (TOPPINGS[topping] || 0); 
      }, 0);
    }
    return price;
  }
}