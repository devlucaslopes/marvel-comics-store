import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ContainerStyles from '../Container/styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ContainerStyles.Wrapper} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    ${media.greaterThan('large')`
      .mobile-menu-icon {
        display: none;
      }
    `}
  `}
`

export const LogoWrapper = styled.div`
  svg {
    width: 10rem;
    height: 8rem;
  }
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};
  `}
`

export const NavLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};

    ${media.lessThan('large')`
        display: none;
    `}
  `}
`
