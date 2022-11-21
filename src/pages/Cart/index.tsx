import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { type FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

import { PaymentMethods } from '../../constants';
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

export type OrderFormSchema = zod.infer<typeof orderFormSchema>;

const paymentMethodsArray: string[] = Object.values(PaymentMethods);

const orderFormSchema = zod.object({
  postalCode: zod.string().regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
  street: zod.string(),
  houseNumber: zod.number(),
  addressComplement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  federativeUnit: zod.string(),
  paymentMethod: zod
    .string({ required_error: 'Selecione um método de pagamento' })
    .refine(
      (value) => paymentMethodsArray.includes(value),
      'Método de pagamento inválido'
    ),
});

export function Cart() {
  const { dispatch } = useContext(CartContext);
  const orderForm = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
  });

  const { handleSubmit } = orderForm;

  const navigate = useNavigate();
  function handleConfirmOrder(data: OrderFormSchema) {
    // Clearing the shopping cart
    dispatch({ type: 'clearCart' });

    // Redirecting the user to the success page
    navigate('/success', { state: data });
  }

  function handleInvalidSubmit(errors: FieldErrors<OrderFormSchema>) {
    // Getting all the form error messages
    const errorMessages = Object.values(errors)
      .filter((error) => error.message !== undefined)
      .map((error) => error.message as string);

    // Combining the errors on a single string
    const combinedErrorMessages = errorMessages.reduce(
      (prevValue, currentError, index, array) => {
        const isLastError = index === array.length - 1;
        // Each line will look like '- Error message'
        return prevValue + '- ' + currentError + (isLastError ? '' : '\n');
      },
      ''
    );

    // Alerting the user about the form errors
    window.alert(combinedErrorMessages);
  }

  return (
    <form onSubmit={handleSubmit(handleConfirmOrder, handleInvalidSubmit)}>
      <CartInnerContainer>
        <FormSectionContainer>
          <FormSectionTitle>Complete seu pedido</FormSectionTitle>
          <FinishOrderInnerContainer>
            <FormProvider {...orderForm}>
              <DeliveryAddress />
              <Payment />
            </FormProvider>
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
