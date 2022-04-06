import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(32, 32, 32, 0.7);
    backdrop-filter: blur(6px);
    z-index: ${theme.layers.onTop};

    animation: ${fadeIn} 0.3s ease-in-out forwards;
  `}
`

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 75%;
    background: ${theme.colors.primary['300']};
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    animation: ${slideIn} 0.3s ease-in-out 0.3s forwards;

    ${media.greaterThan('small')`
      width: 40%;
    `}

    ${media.greaterThan('medium')`
      width: 20%;
    `}
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    height: ${theme.menuHeight};
    padding: ${theme.spacings.medium} ${theme.spacings.large};
    background-color: ${theme.colors.primary['400']};

    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: ${theme.fonts.sizes.h4};
    }

    button {
      border: none;
      background: none;
      color: ${theme.colors.white};
    }
  `}
`

export const EmptyCart = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium} ${theme.spacings.large};
  `}
`

export const CartList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.medium} ${theme.spacings.large};
  `}
`

type CartItem = {
  isRare?: boolean
}

export const CartItem = styled.li<CartItem>`
  ${({ theme, isRare = false }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    color: ${isRare ? theme.colors.highlight : theme.colors.white};

    img {
      width: 100%;
      max-width: 8rem;
      height: 12rem;
      object-fit: cover;
    }

    strong {
      display: block;
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Checkout = styled.button`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: ${theme.spacings.large};
    background-color: ${theme.colors.secondary['400']};
    color: ${theme.colors.white};
    text-transform: uppercase;

    &:disabled {
      background-color: ${theme.colors.primary['100']};
      color: ${theme.colors.primary['200']};
      cursor: not-allowed;
    }
  `}
`

export const FormDiscount = styled.form`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.large};

    h4 {
      font-size: ${theme.fonts.sizes.h4};
      margin-bottom: ${theme.spacings.small};
    }

    input {
      width: 100%;
      padding: ${theme.spacings.small};
    }
  `}
`
