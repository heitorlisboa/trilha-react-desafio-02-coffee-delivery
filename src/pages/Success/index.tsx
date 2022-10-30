import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import {
  OrderInfo,
  OrderInfoIconWrapper,
  OrderInfoItem,
  SuccessInnerContainer,
  SuccessSubtitle,
  SuccessTitle,
} from './styles';

import successIllustration from '../../assets/success-illustration.svg';

export function Success() {
  return (
    <SuccessInnerContainer>
      <div>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessSubtitle>

        <OrderInfo>
          <OrderInfoItem>
            <OrderInfoIconWrapper color="purple" aria-hidden>
              <MapPin size={16} weight="fill" />
            </OrderInfoIconWrapper>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </span>
            <span>Farrapos - Porto Alegre, RS</span>
          </OrderInfoItem>
          <OrderInfoItem>
            <OrderInfoIconWrapper color="yellow" aria-hidden>
              <Timer size={16} weight="fill" />
            </OrderInfoIconWrapper>
            <span>Previsão de entrega</span>
            <strong>20 a 30 minutos</strong>
          </OrderInfoItem>
          <OrderInfoItem>
            <OrderInfoIconWrapper color="yellow-dark" aria-hidden>
              <CurrencyDollar size={16} weight="fill" />
            </OrderInfoIconWrapper>
            <span>Pagamento na entrega</span>
            <strong>Cartão de Crédito</strong>
          </OrderInfoItem>
        </OrderInfo>
      </div>
      <img src={successIllustration} alt="" />
    </SuccessInnerContainer>
  );
}
