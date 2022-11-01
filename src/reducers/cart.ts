import { produce } from 'immer';
import zod from 'zod';

import { createReducer, type ReducerDispatch } from '../utils/create-reducer';

export type CartState = {
  selectedCoffees: {
    coffeeId: string;
    amount: number;
  }[];
};

type AddCoffeeData = {
  coffeeId: string;
  amount: number;
};

type RemoveCoffeeData = {
  coffeeId: string;
};

const coffeeAmountSchema = zod.number().min(1).max(9).step(1);

export type CartReducerDispatch = ReducerDispatch<typeof cartReducer>;

export const cartReducer = createReducer({
  setCoffeeAmountInCart(
    prevState: CartState,
    { coffeeId, amount }: AddCoffeeData
  ) {
    coffeeAmountSchema.parse(amount);

    const nextState = produce(prevState, (draft) => {
      const selectedCoffee = draft.selectedCoffees.find(
        (selectedCoffee) => selectedCoffee.coffeeId === coffeeId
      );

      // If the coffee is selected, just update the amount of that coffee
      if (selectedCoffee) {
        selectedCoffee.amount = amount;
        return;
      }

      // If the coffee is not selected, add it with the provided amount
      draft.selectedCoffees.push({ coffeeId, amount });
    });
    return nextState;
  },

  removeCoffeeFromCart(prevState: CartState, { coffeeId }: RemoveCoffeeData) {
    const nextState = produce(prevState, (draft) => {
      // Finding the coffee index then removing it from the list
      const coffeeIndex = draft.selectedCoffees.findIndex(
        (selectedCoffee) => selectedCoffee.coffeeId === coffeeId
      );
      draft.selectedCoffees.splice(coffeeIndex, 1);
    });
    return nextState;
  },

  clearCart() {
    const nextState: CartState = { selectedCoffees: [] };
    return nextState;
  },
});
