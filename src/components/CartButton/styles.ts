import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    background: none;
    color: ${theme.colors.white};
    cursor: pointer;
    transition: color 0.7s ease;

    &:hover {
      color: ${theme.colors.secondary['400']};
    }
  `}
`
