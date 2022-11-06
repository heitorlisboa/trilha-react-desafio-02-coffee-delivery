import { MapPinLine } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';

import type { OrderFormSchema } from '../..';

import {
  AddressInput,
  AddressInputContainer,
  AddressInputOptionalLabel,
  AddressInputs,
  AddressLabel,
  DeliveryAddressContainer,
  DeliveryAddressHeader,
  DeliveryAddressSubtitle,
  DeliveryAddressTitle,
} from './styles';

export function DeliveryAddress() {
  const { register } = useFormContext<OrderFormSchema>();

  return (
    <DeliveryAddressContainer>
      <DeliveryAddressHeader>
        <MapPinLine size={22} aria-hidden />
        <DeliveryAddressTitle>Endereço de Entrega</DeliveryAddressTitle>
        <DeliveryAddressSubtitle>
          Informe o endereço onde deseja receber seu pedido
        </DeliveryAddressSubtitle>
      </DeliveryAddressHeader>

      <AddressInputs>
        <div>
          <AddressLabel htmlFor="postal-code">CEP</AddressLabel>
          <AddressInput
            id="postal-code"
            type="text"
            placeholder="CEP"
            required
            {...register('postalCode')}
          />
        </div>

        <div>
          <AddressLabel htmlFor="street">Rua</AddressLabel>
          <AddressInput
            id="street"
            type="text"
            placeholder="Rua"
            required
            {...register('street')}
          />
        </div>

        <div>
          <AddressLabel htmlFor="house-number">Número</AddressLabel>
          <AddressInput
            id="house-number"
            type="number"
            placeholder="Número"
            required
            {...register('houseNumber', { valueAsNumber: true })}
          />
        </div>

        <AddressInputContainer>
          <AddressLabel htmlFor="address-complement">Complemento</AddressLabel>
          <AddressInput
            id="address-complement"
            type="text"
            placeholder="Complemento"
            {...register('addressComplement', {
              setValueAs: (value) => (value !== '' ? value : undefined),
            })}
          />
          <AddressInputOptionalLabel htmlFor="address-complement">
            Opcional
          </AddressInputOptionalLabel>
        </AddressInputContainer>

        <div>
          <AddressLabel htmlFor="district">Bairro</AddressLabel>
          <AddressInput
            id="district"
            type="text"
            placeholder="Bairro"
            required
            {...register('district')}
          />
        </div>

        <div>
          <AddressLabel htmlFor="city">Cidade</AddressLabel>
          <AddressInput
            id="city"
            type="text"
            placeholder="Cidade"
            required
            {...register('city')}
          />
        </div>

        <div>
          <AddressLabel htmlFor="federative-unit">
            UF (Unidade Federativa)
          </AddressLabel>
          <AddressInput
            id="federative-unit"
            type="text"
            placeholder="UF"
            required
            {...register('federativeUnit')}
          />
        </div>
      </AddressInputs>
    </DeliveryAddressContainer>
  );
}
