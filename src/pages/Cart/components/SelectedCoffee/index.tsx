import { useContext } from 'react';
import { Trash } from 'phosphor-react';

import { CartContext } from '../../../../contexts/CartContext';
import { formatPrice } from '../../../../utils/format-price';
import type { Coffee } from '../../../../@types/coffee';

import {
  RemoveSelectedCoffeeButton,
  SelectedCoffeeActions,
  SelectedCoffeeContainer,
  SelectedCoffeeDetails,
  SelectedCoffeeInfo,
  SelectedCoffeeName,
  SrOnlyText,
} from './styles';

import { Counter } from '../../../../components/Counter';

const coffeeCounterLimits = {
  min: 1,
  max: 9,
};

type SelectedCoffeeProps = {
  coffeeData: Coffee;
  coffeeAmount: number;
};

export function SelectedCoffee({
  coffeeData: { id, name, price, imageUrl },
  coffeeAmount,
}: SelectedCoffeeProps) {
  const { dispatch } = useContext(CartContext);

  const totalPrice = coffeeAmount * price;

  function handleChangeCoffeeCounter(action: 'increment' | 'decrement') {
    const nextState =
      action === 'increment' ? coffeeAmount + 1 : coffeeAmount - 1;

    const nextStateIsInvalid =
      nextState > coffeeCounterLimits.max ||
      nextState < coffeeCounterLimits.min;
    if (nextStateIsInvalid) return;

    dispatch({
      type: 'setCoffeeAmountInCart',
      payload: {
        coffeeId: id,
        amount: nextState,
      },
    });
  }

  function handleRemoveCoffee() {
    dispatch({
      type: 'removeCoffeeFromCart',
      payload: {
        coffeeId: id,
      },
    });
  }

  return (
    <SelectedCoffeeContainer>
      <SelectedCoffeeInfo>
        <img src={imageUrl} alt="" />
        <SelectedCoffeeDetails>
          <SelectedCoffeeName>{name}</SelectedCoffeeName>
          <SelectedCoffeeActions>
            <Counter
              id={`counter-${id}`}
              label={`Quantidade de ${name}`}
              value={coffeeAmount}
              min={coffeeCounterLimits.min}
              max={coffeeCounterLimits.max}
              onStepperClick={handleChangeCoffeeCounter}
              small
            />
            <RemoveSelectedCoffeeButton
              type="button"
              onClick={handleRemoveCoffee}
            >
              <Trash size={16} />
              Remover <SrOnlyText>{name}</SrOnlyText>
            </RemoveSelectedCoffeeButton>
          </SelectedCoffeeActions>
        </SelectedCoffeeDetails>
      </SelectedCoffeeInfo>
      <strong>R$ {formatPrice(totalPrice)}</strong>
    </SelectedCoffeeContainer>
  );
}
