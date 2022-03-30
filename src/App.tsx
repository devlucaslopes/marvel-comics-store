import { Header } from './components/Header'
import { Banners } from './components/Banners'
import { ComicSection } from './components/ComicSection'

export const App = () => {
  return (
    <>
      <Header />
      <Banners />
      <ComicSection title="Novidades" />
      <ComicSection title="Mais vendidos" />
      <ComicSection title="Queridinhos da galera" />
    </>
  )
}

export default App
