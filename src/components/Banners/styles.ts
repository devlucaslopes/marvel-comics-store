import styled, { css } from 'styled-components'

import * as ContainerStyles from '../Container/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .swiper-slide {
      position: relative;
      height: 56.25vw;
      max-height: ${`calc(100vh - ${theme.menuHeight})`};

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
          180deg,
          #202020 0%,
          rgba(32, 32, 32, 0.15) 100%
        );
        z-index: ${theme.layers.overlay};
      }

      > img {
        position: absolute;
        width: 100%;
        z-index: ${theme.layers.overlay};
      }

      ${ContainerStyles.Wrapper} {
        max-width: 23rem;
        margin: 0;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.h6};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.h5};
    margin-top: ${theme.spacings.medium};
  `}
`
