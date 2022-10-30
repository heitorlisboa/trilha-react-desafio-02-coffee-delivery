import { Trash } from 'phosphor-react';

import { coffees } from '../../../../data/coffees';

import {
  ConfirmOrderButton,
  PriceSummary,
  PriceSummaryItem,
  RemoveSelectedCoffeeButton,
  SelectedCoffee,
  SelectedCoffeeActions,
  SelectedCoffeeDetails,
  SelectedCoffeeInfo,
  SelectedCoffeeName,
  SelectedCoffeesContainer,
  Separator,
  SrOnlyText,
} from './styles';

import { Counter } from '../../../../components/Counter';

type SelectedCoffeesProps = {
  listAriaLabelledBy: string;
};

export function SelectedCoffees({ listAriaLabelledBy }: SelectedCoffeesProps) {
  return (
    <SelectedCoffeesContainer>
      <ul aria-labelledby={listAriaLabelledBy}>
        <SelectedCoffee>
          <SelectedCoffeeInfo>
            <img src={coffees[0].imageUrl} alt="" />
            <SelectedCoffeeDetails>
              <SelectedCoffeeName>{coffees[0].name}</SelectedCoffeeName>
              <SelectedCoffeeActions>
                <Counter
                  id={`counter-${coffees[0].id}`}
                  label={`Quantidade de ${coffees[0].name}`}
                  defaultValue={1}
                  small
                />
                <RemoveSelectedCoffeeButton type="button">
                  <Trash size={16} aria-hidden />
                  Remover <SrOnlyText>{coffees[0].name}</SrOnlyText>
                </RemoveSelectedCoffeeButton>
              </SelectedCoffeeActions>
            </SelectedCoffeeDetails>
          </SelectedCoffeeInfo>
          <strong>R$ 9,90</strong>
        </SelectedCoffee>

        <Separator />

        <SelectedCoffee>
          <SelectedCoffeeInfo>
            <img src={coffees[5].imageUrl} alt="" />
            <SelectedCoffeeDetails>
              <SelectedCoffeeName>{coffees[5].name}</SelectedCoffeeName>
              <SelectedCoffeeActions>
                <Counter
                  id={`counter-${coffees[5].id}`}
                  label={`Quantidade de ${coffees[5].name}`}
                  defaultValue={2}
                  small
                />
                <RemoveSelectedCoffeeButton type="button">
                  <Trash size={16} aria-hidden />
                  Remover <SrOnlyText>{coffees[5].name}</SrOnlyText>
                </RemoveSelectedCoffeeButton>
              </SelectedCoffeeActions>
            </SelectedCoffeeDetails>
          </SelectedCoffeeInfo>
          <strong>R$ 19,80</strong>
        </SelectedCoffee>

        <Separator />
      </ul>

      <PriceSummary>
        <PriceSummaryItem>
          <span>Total de itens</span> <span>R$ 29,70</span>
        </PriceSummaryItem>
        <PriceSummaryItem>
          <span>Entrega</span> <span>R$ 3,50</span>
        </PriceSummaryItem>
        <PriceSummaryItem highlight>
          <span>Total</span> <span>R$ 33,20</span>
        </PriceSummaryItem>
      </PriceSummary>
      <ConfirmOrderButton type="submit">Confirmar pedido</ConfirmOrderButton>
    </SelectedCoffeesContainer>
  );
}
