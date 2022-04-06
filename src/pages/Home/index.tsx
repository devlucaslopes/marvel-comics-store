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
      <ComicSection title="Novidades" comics={news} />
      <ComicSection title="Mais vendidos" comics={bestSellers} />
      <ComicSection title="Queridinhos da galera" comics={favorites} />
    </>
  )
}
