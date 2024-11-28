import { PIZZA_SIZE } from "./types";

export enum PIZZA_NAMES {
    MARGHERITA = 'Margherita',
    HAM_AND_MUSHROOMS = 'HumMushrooms',
    PEPPERONI = 'Pepperoni',
    TRUFFLE = 'Truffle',
    BBQ = 'Bbq',
    CHEESE = 'Cheese'
  }
  
  export const pizzaReceipts = {
    [PIZZA_NAMES.MARGHERITA]: {
      toppings: ['mozzarella', 'tomato'],
      prices: {
       [PIZZA_SIZE.SMALL]:600,
       [PIZZA_SIZE.MEDIUM]:700,
       [PIZZA_SIZE.LARGE]:800
      }
    },

    [PIZZA_NAMES.HAM_AND_MUSHROOMS]: {
      toppings: ['ham', 'musrooms', 'mozzarella'],
      prices: {
        [PIZZA_SIZE.SMALL]:700,
        [PIZZA_SIZE.MEDIUM]:800,
        [PIZZA_SIZE.LARGE]:900
      }
    },

    [PIZZA_NAMES.PEPPERONI]: {
      toppings: ['mozzarella', 'tomato', 'pepperoni'],
      prices: {
        [PIZZA_SIZE.SMALL]:700,
        [PIZZA_SIZE.MEDIUM]:800,
        [PIZZA_SIZE.LARGE]:900
      }
    },

    [PIZZA_NAMES.TRUFFLE]: {
      toppings: ['gorgonzolla', 'mmushrooms', 'truffle_cream'],
      prices: {
        [PIZZA_SIZE.SMALL]:900,
        [PIZZA_SIZE.MEDIUM]:1000,
        [PIZZA_SIZE.LARGE]:1100
      }
    },

    [PIZZA_NAMES.BBQ]: {
      toppings: [
        'mozzarella',
        'tomato', 
        'pepperoni',
        'ham',
        'bacon',
        'chicken',
        'beef'],
      prices: {
        [PIZZA_SIZE.SMALL]:900,
        [PIZZA_SIZE.MEDIUM]:1000,
        [PIZZA_SIZE.LARGE]:1100
      }
    },

    [PIZZA_NAMES.CHEESE]: {
    toppings: ['mozzarella', 'parmesan ', 'cheddar', 'gorgonzolla'],
      prices: {
        [PIZZA_SIZE.SMALL]:790,
        [PIZZA_SIZE.MEDIUM]:890,
        [PIZZA_SIZE.LARGE]:990
      }
    }
  };