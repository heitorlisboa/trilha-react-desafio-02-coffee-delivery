import styled from 'styled-components';
import { transitionCss } from '../../../../styles/css-partials';

export const PaymentContainer = styled.fieldset`
  background-color: ${(props) => props.theme['base-card']};

  display: grid;
  gap: 2rem;

  padding: 2.5rem;
  border: none;
  border-radius: 0.375rem;
`;

export const PaymentHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 0.5rem;

  & > svg {
    grid-row: span 2;
    color: ${(props) => props.theme['purple']};
  }
`;

export const PaymentTitle = styled.legend`
  color: ${(props) => props.theme['base-subtitle']};
`;

export const PaymentSubtitle = styled.span`
  font-size: 0.875rem;
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const PaymentOption = styled.button`
  --border-color: transparent;

  flex: 1;

  background-color: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  text-align: start;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  min-width: 8.5rem;
  padding: 1rem;
  border: none;
  border-radius: 0.375rem;
  box-shadow: inset 0 0 0 0.0625rem /* 1px */ var(--border-color);

  ${transitionCss}
  transition-property: background-color box-shadow;

  &:is(:hover, :focus-visible) {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='on'] {
    --border-color: ${(props) => props.theme['purple']};
    background-color: ${(props) => props.theme['purple-light']};
  }

  & > svg {
    color: ${(props) => props.theme['purple']};
    min-width: 1rem;
  }
`;
