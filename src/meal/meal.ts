import { TOPPINGS } from '../data/prices.js';
import type { IMeal } from '../data/types.js';

export abstract class Meal implements IMeal {
  totalPrice: number;
  constructor(public name: string,public additionalToppings?: (keyof typeof TOPPINGS)[]) {
    this.totalPrice = this.calculatePrice();
  }

abstract calculatePrice(): number;

  getPrice(): number {
    return this.totalPrice;
  }
}