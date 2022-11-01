import {
  createContext,
  useEffect,
  useReducer,
  type PropsWithChildren,
} from 'react';

import {
  cartReducer,
  type CartReducerDispatch,
  type CartState,
} from '../reducers/cart';

type CartContextData = {
  selectedCoffees: {
    coffeeId: string;
    amount: number;
  }[];
  getCoffeeAmountById: (coffeeId: string) => number;
  dispatch: CartReducerDispatch;
};

export const CartContext = createContext({} as CartContextData);

const LOCAL_STORAGE_STATE_KEY = '@coffee-delivery:cart-state-1.0.0';

type CartContextProviderProps = PropsWithChildren;

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      selectedCoffees: [],
    } as CartState,
    initializeCartState
  );

  const { selectedCoffees } = cartState;

  function getCoffeeAmountById(coffeeId: string): number {
    const selectedCoffee = selectedCoffees.find(
      (selectedCoffee) => selectedCoffee.coffeeId === coffeeId
    );
    const coffeeAmount = selectedCoffee?.amount ?? 0;
    return coffeeAmount;
  }

  useEffect(() => {
    // Storing the state in local storage every time it changes
    const stateAsJsonString = JSON.stringify(cartState);
    localStorage.setItem(LOCAL_STORAGE_STATE_KEY, stateAsJsonString);
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{ selectedCoffees, getCoffeeAmountById, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * @returns The local storage state if it exists, otherwise returns the given
 * initial state
 */
function initializeCartState(initialState: CartState) {
  const storedStateAsJsonString = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);

  if (!storedStateAsJsonString) return initialState;

  const storedState: CartState = JSON.parse(storedStateAsJsonString);

  return storedState;
}
