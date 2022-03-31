import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ContainerStyles from '../../components/Container/styles'
import * as ButtonStyles from '../../components/Button/styles'

type BackgroundProps = {
  src: string
}

export const Background = styled.div<BackgroundProps>`
  ${({ theme, src }) => css`
    position: relative;
    background-image: url(${src});
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.medium} 0;

    ${media.greaterThan('medium')`
        flex-direction: row;
        gap: ${theme.spacings.large};
        padding: ${theme.spacings.large} 0;
        height: calc(100vh - ${theme.menuHeight});

        img {
          width: 36rem;
          height: 48rem;
        }
      `}

    ${ContainerStyles.Wrapper} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacings.small};

      img {
        width: 24rem;
        height: 32rem;
        object-fit: cover;
        margin-bottom: ${theme.spacings.small};
      }

      ${media.greaterThan('medium')`
        height: 100%;
        flex-direction: row;
        gap: ${theme.spacings.large};

        img {
          width: 36rem;
          height: 48rem;
        }
      `}
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(32, 32, 32, 0.7);
      backdrop-filter: blur(6px);
      z-index: ${theme.layers.overlay};
    }
  `};
`

export const Description = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: ${theme.fonts.sizes.h5};
      margin-bottom: ${theme.spacings.small};
    }

    > p,
    > span {
      display: none;
    }

    ${media.greaterThan('medium')`
        h2 {
          font-size: ${theme.fonts.sizes.h3};
        }

        > p,
        > span {
          display: block;
          margin-bottom: ${theme.spacings.small};
          color: ${theme.colors.primary['100']};
        }

        ${ButtonStyles.Btn} {
          max-width: 22rem;
          margin-top: ${theme.spacings.large};
        }
      `}
  `}
`

export const MobileDescription = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    color: ${theme.colors.primary['200']};

    p,
    span {
      margin: ${theme.spacings.small} 0;
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`
