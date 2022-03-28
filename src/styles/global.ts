import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.fonts.bodyFamily};
      font-size: ${theme.fonts.sizes.body};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary['400']};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.fonts.titleFamily};
      font-weight: 700;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      font-size: ${theme.fonts.sizes.body};
      color: ${theme.colors.white};
    }

    button {
      cursor: pointer;
      border: 0;
    }
  `}
`
