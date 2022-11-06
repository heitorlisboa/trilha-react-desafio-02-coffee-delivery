import * as RadioGroup from '@radix-ui/react-radio-group';
import { useFormContext } from 'react-hook-form';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import { PaymentMethods } from '../../../../constants';
import type { OrderFormSchema } from '../..';

import {
  PaymentContainer,
  PaymentHeader,
  PaymentOption,
  PaymentOptions,
  PaymentSubtitle,
  PaymentTitle,
} from './styles';

export function Payment() {
  const { setValue } = useFormContext<OrderFormSchema>();

  function handleChangePaymentMethod(value: string) {
    setValue('paymentMethod', value);
  }

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} aria-hidden />
        <PaymentTitle>Pagamento</PaymentTitle>
        <PaymentSubtitle>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </PaymentSubtitle>
      </PaymentHeader>

      <RadioGroup.Root
        aria-label="Método de pagamento"
        onValueChange={handleChangePaymentMethod}
        orientation="horizontal"
        required
        asChild
      >
        <PaymentOptions>
          <RadioGroup.Item value={PaymentMethods.CREDIT_CARD} asChild>
            <PaymentOption>
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentOption>
          </RadioGroup.Item>
          <RadioGroup.Item value={PaymentMethods.DEBIT_CARD} asChild>
            <PaymentOption>
              <Bank size={16} />
              Cartão de débito
            </PaymentOption>
          </RadioGroup.Item>
          <RadioGroup.Item value={PaymentMethods.MONEY} asChild>
            <PaymentOption>
              <Money size={16} />
              Dinheiro
            </PaymentOption>
          </RadioGroup.Item>
        </PaymentOptions>
      </RadioGroup.Root>
    </PaymentContainer>
  );
}
