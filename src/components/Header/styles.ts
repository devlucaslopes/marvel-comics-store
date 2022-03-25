import styled, { css } from 'styled-components'

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

    .logo-header svg {
      width: 10rem;
      height: 8rem;
    }
  `}
`
