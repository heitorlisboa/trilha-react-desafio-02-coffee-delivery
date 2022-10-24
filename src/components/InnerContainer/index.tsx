import styled from 'styled-components';

export const InnerContainer = styled.div`
  --inline-margin: 2rem;
  width: calc(100% - 2 * var(--inline-margin));
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 30rem) {
    --inline-margin: 1rem;
  }
`;
