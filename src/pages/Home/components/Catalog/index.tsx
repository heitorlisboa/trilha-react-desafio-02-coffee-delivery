import { ShoppingCart } from 'phosphor-react';

import { coffees } from '../../../../data/coffees';

import {
  BuyActions,
  BuyContainer,
  CatalogInnerContainer,
  CatalogList,
  CatalogTitle,
  CoffeeCategoryList,
  CoffeeDescription,
  CoffeeTitle,
  Currency,
  Price,
  ShoppingCartAction,
  SrOnlyText,
} from './styles';

import { Counter } from '../../../../components/Counter';

export function Catalog() {
  return (
    <main>
      <CatalogInnerContainer>
        <CatalogTitle id="catalog-title">Nossos cafés</CatalogTitle>
        <CatalogList aria-labelledby="catalog-title">
          {coffees.map(
            ({ id, name, description, categories, price, imageUrl }) => (
              <li key={id}>
                <img src={imageUrl} alt="" />
                <CoffeeCategoryList aria-label="Categorias do café">
                  {categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </CoffeeCategoryList>
                <CoffeeTitle>{name}</CoffeeTitle>
                <CoffeeDescription>{description}</CoffeeDescription>
                <BuyContainer>
                  <div>
                    <Currency>R$ </Currency>
                    <Price>{price.toFixed(2).replace('.', ',')}</Price>
                  </div>
                  <BuyActions>
                    <Counter
                      id={`counter-${id}`}
                      label={`Quantidade de ${name}`}
                      defaultValue={0}
                    />
                    <ShoppingCartAction>
                      <SrOnlyText>Adicionar ao carrinho de compras</SrOnlyText>
                      <ShoppingCart size={22} weight="fill" aria-hidden />
                    </ShoppingCartAction>
                  </BuyActions>
                </BuyContainer>
              </li>
            )
          )}
        </CatalogList>
      </CatalogInnerContainer>
    </main>
  );
}
