import styled from 'styled-components';

import { srOnlyCss, transitionCss } from '../../../../styles/css-partials';

import { InnerContainer } from '../../../../components/InnerContainer';

export const CatalogInnerContainer = styled(InnerContainer)`
  padding-top: 2rem;
  padding-bottom: 5rem;
`;

export const CatalogTitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 2rem;
  font-weight: 800; // Extra bold
`;

export const CatalogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;

  margin-top: 2rem;

  & > li {
    background-color: ${(props) => props.theme['base-card']};

    text-align: center;

    display: grid;
    justify-items: center;

    padding: 1.25rem 1.5rem;
    margin-top: 1.5rem;
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

    & > img {
      margin-top: -2.5rem;
    }
  }
`;

export const CoffeeCategoryList = styled.ul`
  display: flex;
  gap: 0.25rem;

  margin-top: 0.75rem;

  & > li {
    background-color: ${(props) => props.theme['yellow-light']};

    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 100vw;
  }
`;

export const CoffeeTitle = styled.strong`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;

  margin-top: 1rem;
`;

export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 2rem;
`;

export const Currency = styled.span`
  font-size: 0.875rem;
`;

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800; // Extra bold
`;

export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ShoppingCartAction = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};

  color: ${(props) => props.theme['white']};
  line-height: 0;

  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;

  transition-property: background-color;
  ${transitionCss}

  &:is(:hover, :focus-visible) {
    background-color: ${(props) => props.theme['purple']};
  }
`;

export const SrOnlyText = styled.span`
  ${srOnlyCss}
`;
