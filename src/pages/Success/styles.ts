import styled from 'styled-components';

import { InnerContainer } from '../../components/InnerContainer';

export const SuccessInnerContainer = styled(InnerContainer)`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;

  padding: 5rem 0;

  @media (max-width: 60rem) {
    grid-auto-flow: row;
    justify-content: center;
  }

  & > img {
    align-self: flex-end;
    width: 100%;
  }
`;

export const SuccessTitle = styled.h2`
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 2rem;
`;

export const SuccessSubtitle = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;

  display: block;

  margin-top: 0.25rem;
`;

export const OrderInfo = styled.div`
  background-image: linear-gradient(
      ${(props) => props.theme['background']},
      ${(props) => props.theme['background']}
    ),
    linear-gradient(
      to bottom right,
      ${(props) => props.theme['yellow']},
      ${(props) => props.theme['purple']}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  display: grid;
  gap: 2rem;

  max-width: 33rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  border: 0.0625rem /* 1px */ solid transparent;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
`;

export const OrderInfoItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  column-gap: 0.75rem;

  @media (max-width: 25rem) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

enum OrderInfoIconColors {
  'purple' = 'purple',
  'yellow' = 'yellow',
  'yellow-dark' = 'yellow-dark',
}

type OrderInfoIconWrapperProps = {
  color: keyof typeof OrderInfoIconColors;
};

export const OrderInfoIconWrapper = styled.div<OrderInfoIconWrapperProps>`
  grid-row: span 2;

  background-color: ${(props) => {
    const colorKey = OrderInfoIconColors[props.color];
    return props.theme[colorKey];
  }};

  color: ${(props) => props.theme['white']};
  line-height: 0;

  padding: 0.5rem;
  border-radius: 100vw;
`;
