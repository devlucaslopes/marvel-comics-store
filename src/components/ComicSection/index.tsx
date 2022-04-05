import { ComicData } from '../../contexts/types'

import { Container } from '../Container'
import { ComicSlider } from '../ComicSlider'
import { Heading } from '../Heading'

import { Wrapper } from './styles'

type ComicSectionProps = {
  title: string
  comics: ComicData[]
}

export const ComicSection = ({ title, comics }: ComicSectionProps) => (
  <Wrapper>
    <Container>
      <Heading>{title}</Heading>

      <ComicSlider comics={comics} />
    </Container>
  </Wrapper>
)
