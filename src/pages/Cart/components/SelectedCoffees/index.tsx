import { Fragment, useContext } from 'react';

import { CartContext } from '../../../../contexts/CartContext';
import { formatPrice } from '../../../../utils/format-price';
import { getCoffeeById } from '../../../../data/coffees';
import type { Coffee } from '../../../../@types/coffee';

import { SelectedCoffee } from '../SelectedCoffee';

import {
  ConfirmOrderButton,
  PriceSummary,
  PriceSummaryItem,
  SelectedCoffeesContainer,
  Separator,
} from './styles';

type SelectedCoffeesProps = {
  listAriaLabelledBy: string;
};

export function SelectedCoffees({ listAriaLabelledBy }: SelectedCoffeesProps) {
  const { selectedCoffees } = useContext(CartContext);

  const totalCoffeePrice = selectedCoffees.reduce(
    (prevValue, currentCoffee) => {
      const { price } = getCoffeeById(currentCoffee.coffeeId) as Coffee;
      const totalPriceForCurrentCoffee = price * currentCoffee.amount;
      return prevValue + totalPriceForCurrentCoffee;
    },
    0
  );
  const deliverPrice = 3.5;
  const totalPrice = totalCoffeePrice + deliverPrice;

  return (
    <SelectedCoffeesContainer>
      {selectedCoffees.length === 0 ? (
        <span>Adicione cafés ao seu carrinho para finalizar a compra!</span>
      ) : (
        <>
          <ul aria-labelledby={listAriaLabelledBy}>
            {selectedCoffees.map(({ coffeeId, amount }) => {
              const coffeeData = getCoffeeById(coffeeId) as Coffee;

              return (
                <Fragment key={coffeeId}>
                  <SelectedCoffee
                    key={coffeeId}
                    coffeeData={coffeeData}
                    coffeeAmount={amount}
                  />
                  <Separator />
                </Fragment>
              );
            })}
          </ul>

          <PriceSummary>
            <PriceSummaryItem>
              <span>Total de itens</span>{' '}
              <span>R$ {formatPrice(totalCoffeePrice)}</span>
            </PriceSummaryItem>
            <PriceSummaryItem>
              <span>Entrega</span> <span>R$ {formatPrice(deliverPrice)}</span>
            </PriceSummaryItem>
            <PriceSummaryItem highlight>
              <span>Total</span> <span>R$ {formatPrice(totalPrice)}</span>
            </PriceSummaryItem>
          </PriceSummary>
          <ConfirmOrderButton type="submit">
            Confirmar pedido
          </ConfirmOrderButton>
        </>
      )}
    </SelectedCoffeesContainer>
  );
}
