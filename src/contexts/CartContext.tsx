import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { comicsFormatter } from '../utils/formatters'
import { CartContextData, CartProviderProps, ComicData } from './types'

export const CartContext = createContext<CartContextData>({} as CartContextData)

const CartProvider = ({ children }: CartProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [comics, setComics] = useState<ComicData[]>([])
  const [news, setNews] = useState<ComicData[]>([])
  const [bestSellers, setBestSellers] = useState<ComicData[]>([])
  const [favorites, setFavorites] = useState<ComicData[]>([])
  const [items, setItems] = useState<ComicData[]>([])
  const [cartIsOpen, setCartIsOpen] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    try {
      api.get('/comics?orderBy=modified&limit=15').then(({ data }) => {
        const results = data.data.results
        const comicsFormatted = comicsFormatter(results)

        setComics(comicsFormatted)
        setNews(comicsFormatted.slice(0, 5))
        setBestSellers(comicsFormatted.slice(5, 10))
        setFavorites(comicsFormatted.slice(10, 15))
      })
    } catch (error) {
      alert('deu ruim')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleAddItemToCart = (item: ComicData) => {
    setItems([...items, item])
  }

  const handleOpenCart = () => {
    setCartIsOpen(!cartIsOpen)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        comics,
        news,
        bestSellers,
        favorites,
        isLoading,
        cartIsOpen,
        handleAddItemToCart,
        handleOpenCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }
