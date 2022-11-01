import styled from 'styled-components';

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
