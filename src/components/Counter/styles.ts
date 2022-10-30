import styled, { css } from 'styled-components';

import { srOnlyCss, transitionCss } from '../../styles/css-partials';

export const CounterContainer = styled.div<{ small?: boolean }>`
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;

  padding: 0.5rem;
  ${(props) =>
    props.small &&
    css`
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    `}
  border-radius: 0.375rem;
`;

export const CounterLabel = styled.label`
  ${srOnlyCss}
`;

export const CounterInput = styled.input`
  background-color: transparent;

  text-align: center;

  width: 1.25rem;

  padding: 0;
  border: none;

  &:focus-visible {
    outline: none;
  }

  /* Removing the input stepper arrows */
  /* For Mozilla */
  -moz-appearance: textfield;
  appearance: none;
  /* For Webkit */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CounterStepperButton = styled.button`
  background-color: transparent;

  color: ${(props) => props.theme['purple']};
  line-height: 0;

  border: none;

  transition-property: color;
  ${transitionCss}

  &:is(:hover, :focus-visible) {
    color: ${(props) => props.theme['purple-dark']};
  }
`;

export const SrOnlyText = styled.span`
  ${srOnlyCss}
`;
