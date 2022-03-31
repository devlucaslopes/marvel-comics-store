import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Comic } from './pages/Comic'

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Comic />} />
      </Routes>
    </Router>
  )
}

export default App
