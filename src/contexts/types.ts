export type CartContextData = {
  comics: ComicData[]
  news: ComicData[]
  bestSellers: ComicData[]
  favorites: ComicData[]
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
