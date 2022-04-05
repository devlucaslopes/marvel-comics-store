import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { comicsFormatter } from '../utils/formatters'
import { CartContextData, CartProviderProps, ComicData } from './types'

export const CartContext = createContext<CartContextData>({} as CartContextData)

const CartProvider = ({ children }: CartProviderProps) => {
  const [comics, setComics] = useState<ComicData[]>([])
  const [news, setNews] = useState<ComicData[]>([])
  const [bestSellers, setBestSellers] = useState<ComicData[]>([])
  const [favorites, setFavorites] = useState<ComicData[]>([])

  useEffect(() => {
    api.get('/comics?orderBy=modified&limit=15').then(({ data }) => {
      const results = data.data.results
      const comicsFormatted = comicsFormatter(results)

      console.log('comicsFormatted', comicsFormatted)

      setComics(comicsFormatted)
      setNews(comicsFormatted.slice(0, 5))
      setBestSellers(comicsFormatted.slice(5, 10))
      setFavorites(comicsFormatted.slice(10, 15))
    })
  }, [])

  return (
    <CartContext.Provider value={{ comics, news, bestSellers, favorites }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }
