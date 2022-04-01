import { FiMenu } from 'react-icons/fi'
import { CartButton } from '../CartButton'
import { Container } from '../Container'

import { Logo } from '../Logo'

import { Wrapper, LogoWrapper, Navigation, NavLinks } from './styles'

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <FiMenu size={18} className="mobile-menu-icon" />

        <LogoWrapper to="/">
          <Logo />
        </LogoWrapper>

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
