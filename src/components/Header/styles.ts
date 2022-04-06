import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

import * as ContainerStyles from '../Container/styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: ${theme.menuHeight};
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

export const LogoWrapper = styled(Link)`
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

    a {
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.colors.secondary['400']};
      }
    }

    ${media.lessThan('large')`
        display: none;
    `}
  `}
`
