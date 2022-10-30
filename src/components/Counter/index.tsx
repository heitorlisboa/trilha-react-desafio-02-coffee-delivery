import { Minus, Plus } from 'phosphor-react';
import type { InputHTMLAttributes } from 'react';

import {
  CounterContainer,
  CounterInput,
  CounterLabel,
  CounterStepperButton,
  SrOnlyText,
} from './styles';

type CounterProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'readOnly' | 'tabIndex' | 'aria-live'
> & {
  id: string;
  label: string;
  small?: boolean;
};

export function Counter({ id, label, small, ...props }: CounterProps) {
  return (
    <CounterContainer small={small}>
      <CounterLabel htmlFor={id}>{label}</CounterLabel>
      <CounterStepperButton type="button">
        <SrOnlyText>Diminuir {label}</SrOnlyText>
        <Minus size={14} weight="bold" />
      </CounterStepperButton>
      <CounterInput
        id={id}
        type="number"
        readOnly
        tabIndex={-1}
        aria-live="polite"
        {...props}
      />
      <CounterStepperButton type="button">
        <SrOnlyText>Aumentar {label}</SrOnlyText>
        <Plus size={14} weight="bold" />
      </CounterStepperButton>
    </CounterContainer>
  );
}
