import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import type { OrderFormSchema } from '../Cart';

import {
  OrderInfo,
  OrderInfoIconWrapper,
  OrderInfoItem,
  SuccessInnerContainer,
  SuccessSubtitle,
  SuccessTitle,
} from './styles';

import successIllustration from '../../assets/success-illustration.svg';

enum PaymentMethodsNames {
  'creditCard' = 'Cartão de crédito',
  'debitCard' = 'Cartão de débito',
  'money' = 'Dinheiro',
}

export function Success() {
  const { state: orderInfo }: { state: OrderFormSchema } = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (!orderInfo) {
      navigate('/cart');
    }
  }, [orderInfo, navigate]);

  const paymentMethodName =
    PaymentMethodsNames[
      orderInfo.paymentMethod as keyof typeof PaymentMethodsNames
    ];

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
              Entrega em{' '}
              <strong>
                {orderInfo.street}, {orderInfo.houseNumber}
                {orderInfo.addressComplement &&
                  ', ' + orderInfo.addressComplement}
              </strong>
            </span>
            <span>
              {orderInfo.district} - {orderInfo.city},{' '}
              {orderInfo.federativeUnit}
            </span>
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
            <strong>{paymentMethodName}</strong>
          </OrderInfoItem>
        </OrderInfo>
      </div>
      <img src={successIllustration} alt="" />
    </SuccessInnerContainer>
  );
}
