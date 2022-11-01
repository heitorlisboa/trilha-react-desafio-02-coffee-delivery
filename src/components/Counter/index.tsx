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
  value: number;
  min?: number;
  max?: number;
  small?: boolean;
  onStepperClick: (action: 'increment' | 'decrement') => void;
};

export function Counter({
  id,
  label,
  min,
  max,
  small,
  onStepperClick,
  ...props
}: CounterProps) {
  function handleIncrement() {
    onStepperClick('increment');
  }

  function handleDecrement() {
    onStepperClick('decrement');
  }

  const isDecrementButtonDisabled = min !== undefined && props.value <= min;
  const isIncrementButtonDisabled = max !== undefined && props.value >= max;

  return (
    <CounterContainer small={small}>
      <CounterLabel htmlFor={id}>{label}</CounterLabel>
      <CounterStepperButton
        type="button"
        onClick={handleDecrement}
        disabled={isDecrementButtonDisabled}
      >
        <SrOnlyText>Diminuir {label}</SrOnlyText>
        <Minus size={14} weight="bold" />
      </CounterStepperButton>
      <CounterInput
        id={id}
        // Sadly, it needs to be a text input for 'aria-live' to work
        type="text"
        readOnly
        tabIndex={-1}
        aria-live="polite"
        {...props}
      />
      <CounterStepperButton
        type="button"
        onClick={handleIncrement}
        disabled={isIncrementButtonDisabled}
      >
        <SrOnlyText>Aumentar {label}</SrOnlyText>
        <Plus size={14} weight="bold" />
      </CounterStepperButton>
    </CounterContainer>
  );
}
