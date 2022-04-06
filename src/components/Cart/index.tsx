import { useMemo } from 'react'
import { FiX } from 'react-icons/fi'

import { useCart } from '../../hooks/useCart'

import {
  Container,
  Wrapper,
  Header,
  CartList,
  CartItem,
  Checkout,
  FormDiscount,
  EmptyCart
} from './styles'

export const Cart = () => {
  const { items, handleOpenCart } = useCart()

  // TODO: Refatorar
  const hasItems = !!items.length

  return (
    <Wrapper>
      <Container>
        <Header>
          <h4>My Cart</h4>

          <button onClick={handleOpenCart}>
            <FiX size={24} />
          </button>
        </Header>

        {!hasItems && (
          <EmptyCart>Nenhum item foi adicionado ao carrinho.</EmptyCart>
        )}

        {hasItems && (
          <>
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
          </>
        )}

        <Checkout disabled={!hasItems}>Checkout</Checkout>
      </Container>
    </Wrapper>
  )
}
