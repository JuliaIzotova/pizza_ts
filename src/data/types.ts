import { TOPPINGS } from "./prices";
export interface IMeal {
    readonly name: string;
    getPrice(): number;
    additionalToppings?: (keyof typeof TOPPINGS)[]
  }
  
  export enum DOUGH_TYPE {
    CLASSIC = 'CLASSIC',
    THIN = 'THIN'
  }
  
  export enum PIZZA_SIZE {
    SMALL,
    MEDIUM,
    LARGE
  }