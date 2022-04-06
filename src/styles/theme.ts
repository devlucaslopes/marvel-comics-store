export const theme = {
  grid: {
    container: '140rem'
  },
  colors: {
    primary: {
      100: '#D2D2D2',
      200: '#979797',
      300: '#5C5C5C',
      400: '#202020',
      500: '#1B1B1B',
      600: '#1B1B1B',
      700: '#1B1B1B'
    },
    secondary: {
      100: '#FECFD1',
      200: '#F99395',
      300: '#F15A5E',
      400: '#E62429',
      500: '#C31A1F',
      600: '#9F1216',
      700: '#7A0B0E'
    },
    white: '#FCFCFC',
    highlight: '#ECC800'
  },
  fonts: {
    titleFamily: 'Roboto Condensed, sans-serif',
    bodyFamily: 'Roboto, sans-serif',
    sizes: {
      h1: '6.4rem',
      h2: '4.8rem',
      h3: '3.2rem',
      h4: '2.4rem',
      h5: '1.8rem',
      h6: '1.6rem',
      body: '1.6rem'
    }
  },
  spacings: {
    small: '0.8rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    huge: '6.4rem'
  },
  layers: {
    overlay: -1,
    base: 1,
    onTop: 2,
    alwaysOnTop: 3
  },
  menuHeight: '8rem'
} as const
