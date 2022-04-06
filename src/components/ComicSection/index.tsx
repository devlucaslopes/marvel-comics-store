import { ComicData } from '../../contexts/types'

import { Container } from '../Container'
import { ComicSlider } from '../ComicSlider'
import { Heading } from '../Heading'

import { Wrapper } from './styles'

type ComicSectionProps = {
  title: string
  comics: ComicData[]
} & React.HTMLAttributes<HTMLDivElement>

export const ComicSection = ({ title, comics, ...rest }: ComicSectionProps) => (
  <Wrapper {...rest}>
    <Container>
      <Heading>{title}</Heading>

      <ComicSlider comics={comics} />
    </Container>
  </Wrapper>
)
