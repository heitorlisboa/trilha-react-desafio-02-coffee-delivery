import { useContext } from 'react';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { CartContext } from '../../contexts/CartContext';

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
  const { selectedCoffees } = useContext(CartContext);

  const totalItemsInCart = selectedCoffees.reduce(
    (prevValue, currentCoffee) => prevValue + currentCoffee.amount,
    0
  );
  const totalItemsInCartDisplayValue =
    totalItemsInCart > 9 ? '9+' : totalItemsInCart;
  const shouldShowCartItemCount = totalItemsInCart > 0;

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
              <ShoppingCart size={22} weight="fill" />
            </ShoppingCartAction>
            {shouldShowCartItemCount && (
              <ShoppingCartActionCounter aria-live="polite" aria-atomic>
                {totalItemsInCartDisplayValue}{' '}
                <SrOnlyText>itens no carrinhos</SrOnlyText>
              </ShoppingCartActionCounter>
            )}
          </Navigation>
        </Actions>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}
