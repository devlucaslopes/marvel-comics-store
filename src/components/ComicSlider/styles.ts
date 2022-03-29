import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    .swiper-slide {
      width: 100%;
      max-width: 14rem;
      height: 100%;
      min-height: 24rem;

      > img {
        width: 100%;
        height: 100%;
        min-height: 18rem;
        object-fit: cover;
      }

      strong {
        display: block;
        font-weight: 500;
        margin: ${theme.spacings.small} 0;
      }
    }
  `}
`
