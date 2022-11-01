import styled from 'styled-components';

import { srOnlyCss, transitionCss } from '../../../../styles/css-partials';

export const SelectedCoffeeContainer = styled.li`
  display: flex;
  justify-content: space-between;

  @media (max-width: 32.5rem) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const SelectedCoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 32.5rem) {
    flex-direction: column;
    text-align: center;
  }

  & > img {
    height: 4rem;
  }
`;

export const SelectedCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SelectedCoffeeName = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
`;

export const SelectedCoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveSelectedCoffeeButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;

  ${transitionCss}
  transition-property: background-color;

  &:is(:hover, :focus-visible) {
    background-color: ${(props) => props.theme['base-hover']};
  }

  & > svg {
    color: ${(props) => props.theme['purple']};
  }
`;

export const SrOnlyText = styled.span`
  ${srOnlyCss}
`;
