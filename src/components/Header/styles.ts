import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { srOnlyCss } from '../../styles/css-partials';

import { InnerContainer } from '../InnerContainer';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['background']};
  position: sticky;
  top: 0;
`;

export const HeaderInnerContainer = styled(InnerContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
  row-gap: 0.75rem;

  padding: 2rem 0;

  @media (max-width: 24rem) {
    justify-content: center;
  }

  & > h1 {
    line-height: 0;
  }
`;

export const Actions = styled.div`
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const baseActionCss = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 0.375rem;
`;

export const LocationAction = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  ${baseActionCss}

  & > svg {
    color: ${(props) => props.theme['purple']};
  }
`;

export const Navigation = styled.nav`
  position: relative;
`;

export const ShoppingCartAction = styled(NavLink)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  ${baseActionCss}
`;

export const SrOnlyText = styled.span`
  ${srOnlyCss}
`;

export const ShoppingCartActionCounter = styled.div`
  background-color: ${(props) => props.theme['yellow-dark']};

  color: ${(props) => props.theme['white']};
  font-size: 0.75rem;
  font-weight: bold;

  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100vw;
`;
