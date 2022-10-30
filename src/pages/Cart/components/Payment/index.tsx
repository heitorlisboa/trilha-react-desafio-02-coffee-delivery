import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import {
  PaymentContainer,
  PaymentHeader,
  PaymentOption,
  PaymentOptions,
  PaymentSubtitle,
  PaymentTitle,
} from './styles';

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} aria-hidden />
        <PaymentTitle>Pagamento</PaymentTitle>
        <PaymentSubtitle>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </PaymentSubtitle>
      </PaymentHeader>

      <ToggleGroup.Root type="single" aria-label="Método de pagamento" asChild>
        <PaymentOptions>
          <ToggleGroup.Item value="creditCard" asChild>
            <PaymentOption>
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentOption>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="debitCard" asChild>
            <PaymentOption>
              <Bank size={16} />
              Cartão de débito
            </PaymentOption>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="money" asChild>
            <PaymentOption>
              <Money size={16} />
              Dinheiro
            </PaymentOption>
          </ToggleGroup.Item>
        </PaymentOptions>
      </ToggleGroup.Root>
    </PaymentContainer>
  );
}
