import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import { Container } from '../Container'

import { Logo } from '../Logo'

import { Wrapper } from './styles'

export const Header = () => (
  <Wrapper>
    <Container>
      <FiMenu size={18} />

      <div className="logo-header">
        <Logo />
      </div>

      <FiShoppingCart size={18} />
    </Container>
  </Wrapper>
)
