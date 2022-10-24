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
};

export function Counter({ id, label, ...props }: CounterProps) {
  return (
    <CounterContainer>
      <CounterLabel htmlFor={id}>{label}</CounterLabel>
      <CounterStepperButton>
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
      <CounterStepperButton>
        <SrOnlyText>Aumentar {label}</SrOnlyText>
        <Plus size={14} weight="bold" />
      </CounterStepperButton>
    </CounterContainer>
  );
}
