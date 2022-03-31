import { Container } from '../Container'
import { ComicSlider } from '../ComicSlider'
import { Heading } from '../Heading'

import { Wrapper } from './styles'

type ComicSectionProps = {
  title: string
}

export const ComicSection = ({ title }: ComicSectionProps) => (
  <Wrapper>
    <Container>
      <Heading>{title}</Heading>

      <ComicSlider />
    </Container>
  </Wrapper>
)
