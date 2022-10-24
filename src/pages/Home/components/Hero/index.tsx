import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import {
  BenefitIconWrapper,
  BenefitsList,
  HeroContainer,
  HeroContentContainer,
  HeroImage,
  HeroInnerContainer,
  HeroSubtitle,
  HeroTitle,
} from './styles';

import heroImage from '../../../../assets/hero-image.png';

export function Hero() {
  return (
    <HeroContainer>
      <HeroInnerContainer>
        <HeroContentContainer>
          <HeroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HeroTitle>
          <HeroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </HeroSubtitle>
          <BenefitsList aria-label="Benefícios">
            <li>
              <BenefitIconWrapper color="yellow-dark" aria-hidden>
                <ShoppingCart size={16} weight="fill" />
              </BenefitIconWrapper>
              Compra simples e segura
            </li>
            <li>
              <BenefitIconWrapper color="dark-gray" aria-hidden>
                <Package size={16} weight="fill" />
              </BenefitIconWrapper>
              Embalagem mantém o café intacto
            </li>
            <li>
              <BenefitIconWrapper color="yellow" aria-hidden>
                <Timer size={16} weight="fill" />
              </BenefitIconWrapper>
              Entrega rápida e rastreada
            </li>
            <li>
              <BenefitIconWrapper color="purple" aria-hidden>
                <Coffee size={16} weight="fill" />
              </BenefitIconWrapper>
              O café chega fresquinho até você
            </li>
          </BenefitsList>
        </HeroContentContainer>
        <HeroImage
          src={heroImage}
          alt="Copo de café com logo da Coffee Delivery"
        />
      </HeroInnerContainer>
    </HeroContainer>
  );
}
