import { coffees } from '../../../../data/coffees';

import { CatalogInnerContainer, CatalogList, CatalogTitle } from './styles';

import { Coffee } from '../Coffee';

export function Catalog() {
  return (
    <main>
      <CatalogInnerContainer>
        <CatalogTitle id="catalog-title">Nossos cafés</CatalogTitle>
        <CatalogList aria-labelledby="catalog-title">
          {coffees.map((coffee) => (
            <Coffee key={coffee.id} coffeeData={coffee} />
          ))}
        </CatalogList>
      </CatalogInnerContainer>
    </main>
  );
}
