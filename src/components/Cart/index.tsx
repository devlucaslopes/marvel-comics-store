import { FiX } from 'react-icons/fi'

import {
  Container,
  Wrapper,
  Header,
  CartList,
  CartItem,
  Checkout,
  FormDiscount
} from './styles'

type CartProps = {
  onClose: () => void
}

export const Cart = ({ onClose }: CartProps) => (
  <Wrapper>
    <Container>
      <Header>
        <h4>My Cart</h4>

        <button onClick={onClose}>
          <FiX size={24} />
        </button>
      </Header>

      <CartList>
        <CartItem>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="Product"
          />

          <div>
            <strong>X-Men Unlimited: Latitude (2022) #1</strong>
            <span>$ 8.00</span>
          </div>
        </CartItem>

        <CartItem isRare>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="Product"
          />

          <div>
            <strong>X-Men Unlimited: Latitude (2022) #1</strong>
            <span>$ 8.00</span>
          </div>
        </CartItem>
      </CartList>

      <FormDiscount>
        <h4>Discount code</h4>
        <input type="text" placeholder="example#10" />
      </FormDiscount>

      <Checkout>Checkout</Checkout>
    </Container>
  </Wrapper>
)
