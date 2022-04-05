export type CartContextData = {
  comics: ComicData[]
  news: ComicData[]
  bestSellers: ComicData[]
  favorites: ComicData[]
  isLoading: boolean
  items: ComicData[]
  cartIsOpen: boolean
  handleAddItemToCart: (item: ComicData) => void
  handleOpenCart: () => void
}

export type CartProviderProps = {
  children: React.ReactNode
}

export type ComicData = {
  id: number
  title: string
  description: string
  slug: string
  cover: string
  isRare: boolean
  creators: string
  published: string
}
