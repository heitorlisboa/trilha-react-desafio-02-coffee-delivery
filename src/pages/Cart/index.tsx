import {
  CartInnerContainer,
  FinishOrderInnerContainer,
  FormSectionContainer,
  FormSectionTitle,
} from './styles';

import { DeliveryAddress } from './components/DeliveryAddress';
import { Payment } from './components/Payment';
import { SelectedCoffees } from './components/SelectedCoffees';

export function Cart() {
  return (
    <form>
      <CartInnerContainer>
        <FormSectionContainer>
          <FormSectionTitle>Complete seu pedido</FormSectionTitle>
          <FinishOrderInnerContainer>
            <DeliveryAddress />
            <Payment />
          </FinishOrderInnerContainer>
        </FormSectionContainer>

        <FormSectionContainer>
          <FormSectionTitle id="selected-coffees-title">
            Cafés selecionados
          </FormSectionTitle>
          <SelectedCoffees listAriaLabelledBy="selected-coffees-title" />
        </FormSectionContainer>
      </CartInnerContainer>
    </form>
  );
}
