import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tilt from 'react-tilt'

import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { ComicData } from '../../contexts/types'
import { useCart } from '../../hooks/useCart'

import { Background, Description, MobileDescription } from './styles'

export const Comic = () => {
  const { slug } = useParams()
  const { comics, isLoading, handleAddItemToCart } = useCart()

  const [comic, setComic] = useState<ComicData | undefined>(undefined)

  useEffect(() => {
    setComic(comics.find((item) => item.slug === slug))
  }, [comics])

  return (
    <>
      {!isLoading && comic && (
        <>
          <Background src={comic.cover}>
            <Container>
              <Tilt className="Tilt" options={{ max: 25 }}>
                <img src={comic.cover} alt={comic.title} />
              </Tilt>

              <Description>
                <h2>{comic.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: comic.description }} />
                <span>Published at {comic.published}</span>
                <Button
                  variant="filled"
                  onClick={() => handleAddItemToCart(comic)}
                >
                  Add to cart
                </Button>
              </Description>
            </Container>
          </Background>
          <MobileDescription>
            <Container>
              <h2>Summary</h2>
              <p dangerouslySetInnerHTML={{ __html: comic.description }} />
              <span>Published at {comic.published}</span>
            </Container>
          </MobileDescription>
        </>
      )}
    </>
  )
}
