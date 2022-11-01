import { type FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

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
  const { dispatch } = useContext(CartContext);

  const navigate = useNavigate();

  function handleConfirmOrder(event: FormEvent) {
    event.preventDefault();

    // Clearing the shopping cart
    dispatch({ type: 'clearCart' });

    // Redirecting the user to the success page
    navigate('/success');
  }

  return (
    <form onSubmit={handleConfirmOrder}>
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
