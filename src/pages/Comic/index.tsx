import { useParams } from 'react-router-dom'
import Tilt from 'react-tilt'

import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { useCart } from '../../hooks/useCart'

import { Background, Description, MobileDescription } from './styles'

export const Comic = () => {
  const { slug } = useParams()
  const { comics } = useCart()

  const comic = comics.find((comic) => comic.slug === slug)

  console.log(comic)

  return (
    <>
      <Background src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60">
        <Container>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />
          </Tilt>

          <Description>
            <h2>READ THE FIRST ISSUE OF ‘ALLIGATOR LOKI’</h2>
            <p>
              WOLVERINE JUMPS INTO THE VOID! When A.I.M. manages a covert
              infiltration of the S.W.O.R.D. station and kidnaps three mutants,
              it’s up to Wolverine to take one giant leap for man and get them
              back. From the vacuum of space to the dripping guts of an evil
              supercomputer, Logan will stop at nothing to save his friends.
              Collecting the first four chapters of the hit MARVEL INFINITY
              COMIC by Head of X Jonathan Hickman and superstar artist Declan
              Shalvey for the first time in print!
            </p>
            <span>Published at March 16, 2022</span>
            <Button variant="filled">Add to cart</Button>
          </Description>
        </Container>
      </Background>

      <MobileDescription>
        <Container>
          <h2>Summary</h2>
          <p>
            WOLVERINE JUMPS INTO THE VOID! When A.I.M. manages a covert
            infiltration of the S.W.O.R.D. station and kidnaps three mutants,
            it’s up to Wolverine to take one giant leap for man and get them
            back. From the vacuum of space to the dripping guts of an evil
            supercomputer, Logan will stop at nothing to save his friends.
            Collecting the first four chapters of the hit MARVEL INFINITY COMIC
            by Head of X Jonathan Hickman and superstar artist Declan Shalvey
            for the first time in print!
          </p>
          <span>Published at March 16, 2022</span>
        </Container>
      </MobileDescription>
    </>
  )
}
