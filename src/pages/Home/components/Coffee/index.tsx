import { useContext, useState } from 'react';
import { ShoppingCart } from 'phosphor-react';

import { CartContext } from '../../../../contexts/CartContext';
import { formatPrice } from '../../../../utils/format-price';
import type { Coffee as CoffeeData } from '../../../../@types/coffee';

import {
  BuyActions,
  BuyContainer,
  CoffeeCategoryList,
  CoffeeDescription,
  CoffeeTitle,
  Currency,
  Price,
  ShoppingCartAction,
  SrOnlyText,
} from './styles';

import { Counter } from '../../../../components/Counter';

const coffeeCounterLimits = {
  min: 0,
  max: 9,
};

enum ShoppingCartActionDescriptions {
  'add' = 'Adicionar ao carrinho de compras',
  'update' = 'Atualizar quantidade do café no carrinho de compras',
  'remove' = 'Remover café do carrinho de compras',
}

type ShoppingCartActionType = keyof typeof ShoppingCartActionDescriptions;

type CoffeeProps = {
  coffeeData: CoffeeData;
};

export function Coffee({
  coffeeData: { id, name, description, categories, price, imageUrl },
}: CoffeeProps) {
  const { getCoffeeAmountById, dispatch } = useContext(CartContext);
  const currentCoffeeAmountInCart = getCoffeeAmountById(id);
  const [coffeeCounter, setCoffeeCounter] = useState(currentCoffeeAmountInCart);

  function handleChangeCoffeeCounter(action: 'increment' | 'decrement') {
    setCoffeeCounter((prevState) => {
      const nextState = action === 'increment' ? prevState + 1 : prevState - 1;

      const nextStateIsInvalid =
        nextState > coffeeCounterLimits.max ||
        nextState < coffeeCounterLimits.min;
      if (nextStateIsInvalid) return prevState;

      return nextState;
    });
  }

  function handleSetCoffeeAmountInCart() {
    if (coffeeCounter > 0) {
      dispatch({
        type: 'setCoffeeAmountInCart',
        payload: {
          coffeeId: id,
          amount: coffeeCounter,
        },
      });
    } else {
      dispatch({
        type: 'removeCoffeeFromCart',
        payload: {
          coffeeId: id,
        },
      });
    }
  }

  const currentShoppingCartAction: ShoppingCartActionType =
    currentCoffeeAmountInCart === 0
      ? 'add'
      : coffeeCounter > 0
      ? 'update'
      : 'remove';
  const currentShoppingCartActionDescription =
    ShoppingCartActionDescriptions[currentShoppingCartAction];
  const isShoppingCartActionDisabled =
    currentCoffeeAmountInCart === coffeeCounter;

  return (
    <li>
      <img src={imageUrl} alt="" />
      <CoffeeCategoryList aria-label="Categorias do café">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </CoffeeCategoryList>
      <CoffeeTitle>{name}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>
      <BuyContainer>
        <div>
          <Currency>R$ </Currency>
          <Price>{formatPrice(price)}</Price>
        </div>
        <BuyActions>
          <Counter
            id={`counter-${id}`}
            label={`Quantidade de ${name}`}
            value={coffeeCounter}
            min={coffeeCounterLimits.min}
            max={coffeeCounterLimits.max}
            onStepperClick={handleChangeCoffeeCounter}
          />
          <ShoppingCartAction
            onClick={handleSetCoffeeAmountInCart}
            title={currentShoppingCartActionDescription}
            disabled={isShoppingCartActionDisabled}
          >
            <SrOnlyText>{currentShoppingCartActionDescription}</SrOnlyText>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartAction>
        </BuyActions>
      </BuyContainer>
    </li>
  );
}
