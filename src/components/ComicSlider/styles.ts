import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    .swiper-slide {
      width: 100%;
      max-width: 14rem;
      height: 100%;
      min-height: 24rem;

      ${media.greaterThan('medium')`
          max-width: 26rem;
      `}
    }
  `}
`

type ComicItemProps = {
  isRare?: boolean
}

export const ComicItem = styled.div<ComicItemProps>`
  ${({ theme, isRare = false }) => css`
    width: 100%;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      min-height: 18rem;
      object-fit: cover;
      border: ${isRare ? `2px solid ${theme.colors.highlight}` : 'none'};
    }

    strong {
      display: block;
      font-weight: 500;
      margin: ${theme.spacings.small} 0;
    }

    color: ${isRare ? theme.colors.highlight : theme.colors.white};

    &:hover {
      img {
        filter: brightness(0.7);
      }
    }

    ${media.greaterThan('medium')`
      img {
        min-height: 32rem;
      }
    `}
  `}
`
