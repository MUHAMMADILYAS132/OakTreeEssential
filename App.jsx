import { useEffect, useState } from 'react'
import './App.css'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import About from './pages/About.jsx'
import Collections from './pages/Collections.jsx'
import Journal from './pages/Journal.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Account from './pages/Account.jsx'
import NotFound from './pages/NotFound.jsx'
import { CartProvider } from './context/CartContext.jsx'

function App() {
  const [path, setPath] = useState(`${window.location.pathname}${window.location.search}`)

  useEffect(() => {
    const updatePath = () => setPath(`${window.location.pathname}${window.location.search}`)
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  const pathname = path.split('?')[0]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  const navigate = (to, { replace = false } = {}) => {
    if (to === `${window.location.pathname}${window.location.search}`) return
    if (replace) window.history.replaceState({}, '', to)
    else window.history.pushState({}, '', to)
    setPath(to)
  }

  const route = pathname.split('/').filter(Boolean)
  let page

  if (route.length === 0) page = <Home navigate={navigate} />
  else if (route[0] === 'shop') page = <Shop navigate={navigate} searchTerm={new URLSearchParams(path.split('?')[1] || '').get('search') || ''} />
  else if (route[0] === 'collections') page = <Collections navigate={navigate} />
  else if (route[0] === 'journal') page = <Journal />
  else if (route[0] === 'about') page = <About />
  else if (route[0] === 'contact') page = <Contact />
  else if (route[0] === 'cart') page = <Cart navigate={navigate} />
  else if (route[0] === 'account' || route[0] === 'sign-in') page = <Account signIn={route[0] === 'sign-in'} />
  else if (route[0] === 'products' && route[1]) page = <ProductDetails slug={route[1]} navigate={navigate} />
  else page = <NotFound navigate={navigate} />

  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
    </CartProvider>
  )
}

export default App
