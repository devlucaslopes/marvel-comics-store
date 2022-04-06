import styled, { css, keyframes } from 'styled-components'

const draw = keyframes`
  0% {
    fill-opacity: 0;
    stroke-width: 1;
    stroke-dasharray: 20 100;
    stroke-dashoffset: 15;
    transform: scale(0.2);
  }
  90% {
    fill-opacity: 0;
    stroke-width: 1;
    stroke-dasharray: 200 1;
    stroke-dashoffset: 0;
  }
  95% {
    fill-opacity: 1;
  }
  100% {
    fill-opacity: 1;
    transform: scale(1);
  }
`

const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.secondary[400]};
    z-index: ${theme.layers.alwaysOnTop};
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${fadeOut} 1s ease 3s forwards;

    #marvel-logo {
      transform-origin: center center;

      animation: ${draw} 3s ease forwards;
    }
  `}
`
