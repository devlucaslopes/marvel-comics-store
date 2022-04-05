import { FiX } from 'react-icons/fi'

import { useCart } from '../../hooks/useCart'

import {
  Container,
  Wrapper,
  Header,
  CartList,
  CartItem,
  Checkout,
  FormDiscount
} from './styles'

export const Cart = () => {
  const { items, handleOpenCart } = useCart()

  return (
    <Wrapper>
      <Container>
        <Header>
          <h4>My Cart</h4>

          <button onClick={handleOpenCart}>
            <FiX size={24} />
          </button>
        </Header>

        <CartList>
          {items.map((item) => (
            <CartItem key={item.id} isRare={item.isRare}>
              <img src={item.cover} alt={item.title} />

              <div>
                <strong>{item.title}</strong>
                <span>$ 8.00</span>
              </div>
            </CartItem>
          ))}
        </CartList>

        <FormDiscount>
          <h4>Discount code</h4>
          <input type="text" placeholder="example#10" />
        </FormDiscount>

        <Checkout>Checkout</Checkout>
      </Container>
    </Wrapper>
  )
}
