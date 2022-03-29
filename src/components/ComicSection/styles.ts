import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
  `}
`
const fadeIn = keyframes`
  from {
    fill-opacity: 0;
    transform: translateX(-30px);
  }
  to {
    fill-opacity: 1;
    transform: translateX(0);
  }
`

export const Title = styled.h4`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    font-size: ${theme.fonts.sizes.h4};
    font-weight: 500;

    > svg {
      height: 0.8rem;
      position: absolute;
      left: -6.4rem;
      fill-opacity: 0;

      animation: ${fadeIn} 0.7s ease forwards;
    }
  `}
`
