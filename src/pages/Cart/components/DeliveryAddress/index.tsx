import { MapPinLine } from 'phosphor-react';

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
          />
        </div>

        <div>
          <AddressLabel htmlFor="street">Rua</AddressLabel>
          <AddressInput id="street" type="text" placeholder="Rua" required />
        </div>

        <div>
          <AddressLabel htmlFor="house-number">Número</AddressLabel>
          <AddressInput
            id="house-number"
            type="text"
            placeholder="Número"
            required
          />
        </div>

        <AddressInputContainer>
          <AddressLabel htmlFor="address-complement">Complemento</AddressLabel>
          <AddressInput
            id="address-complement"
            type="text"
            placeholder="Complemento"
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
          />
        </div>

        <div>
          <AddressLabel htmlFor="city">Cidade</AddressLabel>
          <AddressInput id="city" type="text" placeholder="Cidade" required />
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
          />
        </div>
      </AddressInputs>
    </DeliveryAddressContainer>
  );
}
