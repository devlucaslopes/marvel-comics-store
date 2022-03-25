import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import { Container } from '../Container'

import { Logo } from '../Logo'

import { Wrapper, LogoWrapper, Navigation, NavLinks } from './styles'

export const Header = () => (
  <Wrapper>
    <Container>
      <FiMenu size={18} className="mobile-menu-icon" />

      <LogoWrapper>
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

        <FiShoppingCart size={18} />
      </Navigation>
    </Container>
  </Wrapper>
)
