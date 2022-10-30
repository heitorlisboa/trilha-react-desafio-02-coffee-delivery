import styled from 'styled-components';

import { srOnlyCss } from '../../../../styles/css-partials';

export const DeliveryAddressContainer = styled.fieldset`
  background-color: ${(props) => props.theme['base-card']};

  display: grid;
  gap: 2rem;

  padding: 2.5rem;
  border: none;
  border-radius: 0.375rem;
`;

export const DeliveryAddressHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 0.5rem;

  & > svg {
    grid-row: span 2;
    color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const DeliveryAddressTitle = styled.legend`
  color: ${(props) => props.theme['base-subtitle']};
`;

export const DeliveryAddressSubtitle = styled.span`
  font-size: 0.875rem;
`;

export const AddressInputs = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 40rem) {
    grid-template-columns: 35% 1fr 4rem;

    & > :nth-of-type(1) {
      grid-column: 1 / 2;
    }
    & > :nth-of-type(2) {
      grid-column: 1 / -1;
    }
    & > :nth-of-type(3) {
      grid-column: 1 / 2;
    }
    & > :nth-of-type(4) {
      grid-column: 2 / -1;
    }
    & > :nth-of-type(5) {
      grid-column: 1 / 2;
    }
    & > :nth-of-type(6) {
      grid-column: 2 / 3;
    }
    & > :nth-of-type(7) {
      grid-column: 3 / -1;
    }
  }
`;

export const AddressInputContainer = styled.div`
  position: relative;
`;

export const AddressLabel = styled.label`
  ${srOnlyCss}
`;

export const AddressInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};

  font-size: 0.875rem;

  width: 100%;
  min-width: 0;
  padding: 0.75rem;
  border: 0.0625rem /* 1px */ solid ${(props) => props.theme['base-button']};
  border-radius: 0.25rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const AddressInputOptionalLabel = styled.label`
  color: ${(props) => props.theme['base-label']};
  font-size: 0.75rem;
  font-style: italic;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.75rem;

  height: fit-content;
  margin: auto 0;
`;
