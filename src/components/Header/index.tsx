import { MapPin, ShoppingCart } from 'phosphor-react';

import {
  Actions,
  HeaderContainer,
  HeaderInnerContainer,
  LocationAction,
  Navigation,
  ShoppingCartAction,
  ShoppingCartActionCounter,
  SrOnlyText,
} from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <h1>
          <img src={logo} alt="Coffee Delivery" />
        </h1>

        <Actions>
          <LocationAction>
            <MapPin size={22} weight="fill" aria-label="Localização" />
            <span>Porto Alegre, RS</span>
          </LocationAction>
          <Navigation>
            <ShoppingCartAction to="/cart">
              <SrOnlyText>Ir para o carrinho de compras</SrOnlyText>
              <ShoppingCart size={22} weight="fill" aria-hidden />
            </ShoppingCartAction>
            <ShoppingCartActionCounter>
              3 <SrOnlyText>itens no carrinho</SrOnlyText>
            </ShoppingCartActionCounter>
          </Navigation>
        </Actions>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}
