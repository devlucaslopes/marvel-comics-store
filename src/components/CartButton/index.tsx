import { FiShoppingCart } from 'react-icons/fi'

import { useCart } from '../../hooks/useCart'
import { Cart } from '../Cart'

import { Button } from './styles'

export const CartButton = () => {
  const { cartIsOpen, handleOpenCart } = useCart()

  return (
    <>
      <Button onClick={handleOpenCart}>
        <FiShoppingCart size={18} />
      </Button>

      {cartIsOpen && <Cart />}
    </>
  )
}
