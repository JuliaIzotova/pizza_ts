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
      basePrice: 100
    },

    [PIZZA_NAMES.HAM_AND_MUSHROOMS]: {
      toppings: ['ham', 'musrooms', 'mozzarella'],
      basePrice: 200
    },

    [PIZZA_NAMES.PEPPERONI]: {
      toppings: ['mozzarella', 'tomato', 'pepperoni'],
      basePrice:300
    },

    [PIZZA_NAMES.TRUFFLE]: {
      toppings: ['gorgonzolla', 'mmushrooms', 'truffle_cream'],
      basePrice:400
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
        basePrice:500
    },

    [PIZZA_NAMES.CHEESE]: {
    toppings: ['mozzarella', 'parmesan ', 'cheddar', 'gorgonzolla'],
    basePrice:600
    }
  };