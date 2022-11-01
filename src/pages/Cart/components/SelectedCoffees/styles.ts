import styled, { css } from 'styled-components';

import { transitionCss } from '../../../../styles/css-partials';

export const SelectedCoffeesContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
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
