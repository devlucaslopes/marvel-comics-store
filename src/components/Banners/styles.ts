import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ContainerStyles from '../Container/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .swiper-pagination {
      position: absolute;
      bottom: ${theme.spacings.large};
      z-index: ${theme.layers.alwaysOnTop};

      width: 100%;
      display: flex;
      justify-content: center;
      gap: ${theme.spacings.small};
    }

    .swiper-pagination-bullet {
      width: 3.2rem;
      height: 0.8rem;
      background-color: ${theme.colors.primary['100']};
      color: ${theme.colors.primary['100']};
      font-size: 1px;
      padding-left: 1px;

      ${media.greaterThan('medium')`
        width: 6.4rem;
        height: 1.6rem;
      `}
    }

    .swiper-pagination-bullet-active {
      background-color: ${theme.colors.secondary['500']};
      color: ${theme.colors.secondary['500']};
    }

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
        max-width: 24rem;
        margin: 0;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        ${media.greaterThan('medium')`
          max-width: 56rem;
        `}
      }
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.h6};

    ${media.greaterThan('medium')`
      font-size: ${theme.fonts.sizes.h4};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.h5};
    margin: ${theme.spacings.medium} 0;

    ${media.greaterThan('medium')`
      font-size: ${theme.fonts.sizes.h3};
    `}

    ${media.greaterThan('large')`
      font-size: ${theme.fonts.sizes.h2};
    `}
  `}
`

export const ButtonWrapper = styled.div`
  max-width: 12rem;

  ${media.greaterThan('medium')`
    max-width: 28rem;
  `}
`
