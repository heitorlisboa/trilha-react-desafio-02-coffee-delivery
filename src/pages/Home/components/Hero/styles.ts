import styled from 'styled-components';

import { InnerContainer } from '../../../../components/InnerContainer';

import heroBackground from '../../../../assets/background.svg';

export const HeroContainer = styled.div`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
`;

export const HeroInnerContainer = styled(InnerContainer)`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  row-gap: 2rem;

  padding: 5.75rem 0;

  @media (max-width: 71.5rem) {
    grid-auto-flow: row;
    justify-content: center;
    padding: 3rem 0;
  }
`;

export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36.75rem;

  @media (max-width: 71.5rem) {
    max-width: 41rem;
    align-items: center;
  }
`;

export const HeroTitle = styled.h2`
  color: ${(props) => props.theme['base-title']};
  font-size: 3rem;
  font-weight: 800; // Extra bold

  @media (max-width: 30rem) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;

  margin-top: 1rem;
`;

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  margin-top: 4rem;

  & > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 30rem) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

enum BenefitIconColors {
  'yellow-dark' = 'yellow-dark',
  'dark-gray' = 'base-text',
  'yellow' = 'yellow',
  'purple' = 'purple',
}

type BenefitIconWrapperProps = {
  color: keyof typeof BenefitIconColors;
};

export const BenefitIconWrapper = styled.div<BenefitIconWrapperProps>`
  background-color: ${(props) => {
    const colorKey = BenefitIconColors[props.color];
    return props.theme[colorKey];
  }};

  color: ${(props) => props.theme['white']};
  line-height: 0;

  padding: 0.5rem;
  border-radius: 100vw;
`;

export const HeroImage = styled.img`
  max-width: 100%;
`;
