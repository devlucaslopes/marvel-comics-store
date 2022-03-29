import { Container } from '../Container'

import { Title, Wrapper } from './styles'

export const ComicSection = () => (
  <Wrapper>
    <Container>
      <Title>
        <svg viewBox="0 0 35 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.8868 3L32 0.113251L29.1132 3L32 5.88675L34.8868 3ZM-4.37114e-08 3.5L32 3.5L32 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
            fill="url(#paint0_linear_33_279)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_33_279"
              x1="32"
              y1="3"
              x2="0.999999"
              y2="3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCFCFC" />
              <stop offset="1" stopColor="#FCFCFC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        Novidades
      </Title>
      <div>Lista</div>
    </Container>
  </Wrapper>
)
