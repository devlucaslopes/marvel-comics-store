import { FiMenu } from 'react-icons/fi'
import { Tween } from 'react-gsap'

import { CartButton } from '../CartButton'
import { Container } from '../Container'
import { Logo } from '../Logo'

import { Wrapper, LogoWrapper, Navigation, NavLinks } from './styles'

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <FiMenu size={18} className="mobile-menu-icon" />

        <Tween
          from={{ x: '-200px', opacity: 0 }}
          to={{ x: '0', opacity: 1 }}
          duration={2}
          ease="back.out(1.7)"
        >
          <LogoWrapper to="/">
            <Logo />
          </LogoWrapper>
        </Tween>

        <Navigation>
          <NavLinks>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Mais vendidos</a>
            </li>
            <li>
              <a href="#">Queridinhos da galera</a>
            </li>
          </NavLinks>

          <CartButton />
        </Navigation>
      </Container>
    </Wrapper>
  )
}
