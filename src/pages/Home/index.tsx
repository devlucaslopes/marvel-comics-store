import { Banners } from '../../components/Banners'
import { ComicSection } from '../../components/ComicSection'
import { Loader } from '../../components/Loader'
import { useCart } from '../../hooks/useCart'

export const Home = () => {
  const { news, bestSellers, favorites } = useCart()

  return (
    <>
      <Loader />
      <Banners />
      <ComicSection title="Novidades" comics={news} id="news" />
      <ComicSection
        title="Mais vendidos"
        comics={bestSellers}
        id="best-sellers"
      />
      <ComicSection
        title="Queridinhos da galera"
        comics={favorites}
        id="favorites"
      />
    </>
  )
}
