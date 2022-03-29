import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import media from 'styled-media-query'

import { ButtonVariant } from '.'

type BtnProps = {
  variant: ButtonVariant
}

const hoverAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`

const btnModifiers = {
  filled: (theme: DefaultTheme) => css`
    position: relative;
    background-color: ${theme.colors.secondary['400']};
    color: ${theme.colors.white};

    &:hover {
      &::before {
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        width: 0%;
        height: 100%;
        background-color: ${theme.colors.secondary['600']};

        animation: ${hoverAnimation} 0.7s ease forwards;
      }
    }
  `,
  outline: (theme: DefaultTheme) => css`
    position: relative;
    border: 2px solid ${theme.colors.white};
    background: transparent;
    color: ${theme.colors.white};
    transition: color 0.7s ease;

    &:hover {
      color: ${theme.colors.primary['400']};

      &::before {
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        width: 0%;
        height: 100%;
        background-color: ${theme.colors.white};

        animation: ${hoverAnimation} 0.7s ease forwards;
      }
    }
  `
}

export const Btn = styled.button<BtnProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    padding: ${theme.spacings.small} 0;
    text-align: center;
    transform: skewX(-15deg);

    ${btnModifiers[variant](theme)};

    > span {
      display: block;
      transform: skewX(15deg);
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium} 0;
    `}
  `};
`
