import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import { Cart } from '../Cart'

import { Button } from './styles'

export const CartButton = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const handleOpenCart = () => {
    setCartIsOpen(true)
  }

  return (
    <>
      <Button onClick={handleOpenCart}>
        <FiShoppingCart size={18} />
      </Button>

      {cartIsOpen && <Cart onClose={() => setCartIsOpen(!cartIsOpen)} />}
    </>
  )
}
