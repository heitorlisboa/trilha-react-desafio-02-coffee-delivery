import styled, { css } from 'styled-components';

import { srOnlyCss, transitionCss } from '../../../../styles/css-partials';

export const SelectedCoffeesContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
`;

export const SelectedCoffee = styled.li`
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

export const Separator = styled.div`
  background-color: ${(props) => props.theme['base-button']};

  width: 100%;
  height: 0.0625rem /* 1px */;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-bottom: 1.5rem;
`;

export const PriceSummaryItem = styled.div<{ highlight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.highlight
      ? css`
          color: ${props.theme['base-subtitle']};
          font-size: 1.25rem;
          font-weight: bold;
        `
      : css`
          & > :first-child {
            font-size: 0.875rem;
          }
        `}
`;

export const ConfirmOrderButton = styled.button`
  background-color: ${(props) => props.theme['yellow']};

  color: ${(props) => props.theme['white']};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: bold;
  text-transform: uppercase;

  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;

  ${transitionCss}
  transition-property: background-color;

  &:is(:hover, :focus-visible) {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
