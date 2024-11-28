import { PIZZA_NAMES } from '../data/receipts';
import { IMeal } from '../data/types';

export abstract class Meal implements IMeal {
    public finalPrice: number
    constructor(readonly name: PIZZA_NAMES, public basePrice: number) {
        this.finalPrice = this.calculatePrice()
  }
  getPrice(): number{
    return this.finalPrice;
  }
  abstract calculatePrice(): number
}