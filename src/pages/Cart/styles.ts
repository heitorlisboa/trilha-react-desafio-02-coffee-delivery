import styled from 'styled-components';
import { InnerContainer } from '../../components/InnerContainer';

export const CartInnerContainer = styled(InnerContainer)`
  padding: 2.5rem 0;
  display: grid;
  gap: 2rem;

  @media (max-width: calc(70rem - 1px)) {
    max-width: 40rem;
  }

  @media (min-width: 70rem) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const FormSectionContainer = styled.div`
  display: grid;
  align-content: flex-start;
  gap: 1rem;
`;

export const FormSectionTitle = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
`;

export const FinishOrderInnerContainer = styled.div`
  display: grid;
  gap: 0.75rem;
`;
