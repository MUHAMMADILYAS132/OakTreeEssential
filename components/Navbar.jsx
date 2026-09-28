import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

const links = [
  ['Home', '/'],
  ['Shop', '/shop'],
  ['Collections', '/collections'],
  ['Blog', '/journal'],
  ['Our story', '/about'],
  ['Contact', '/contact'],
  ['Account', '/account'],
  ['Sign in', '/sign-in'],
]

export default function Navbar({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const previousScrollY = useRef(0)
  const searchInput = useRef(null)
  const { itemCount } = useCart()
  const go = (event, to) => { event.preventDefault(); setMenuOpen(false); navigate(to) }

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus()
  }, [searchOpen])

  const submitSearch = (event) => {
    event.preventDefault()
    const query = searchTerm.trim()
    if (!query) return
    setSearchOpen(false)
    navigate(`/shop?search=${encodeURIComponent(query)}`)
  }

  const updateSearch = (event) => {
    const value = event.target.value
    setSearchTerm(value)

    if (value.trim()) {
      navigate(`/shop?search=${encodeURIComponent(value.trim())}`, { replace: window.location.pathname.startsWith('/shop') })
    } else if (window.location.pathname.startsWith('/shop')) {
      navigate('/shop', { replace: true })
    }
  }

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSearchOpen(false)
      setSearchTerm('')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 80 || currentScrollY < previousScrollY.current - 4) {
        setHidden(false)
      } else if (currentScrollY > previousScrollY.current + 4 && currentScrollY > 120) {
        setHidden(true)
      }

      previousScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${hidden ? ' is-hidden' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <button className="icon-button menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <a className="brand" href="/" onClick={(event) => go(event, '/')}>oak<span>&</span>Essential</a>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>{links.map(([label, path]) => <a className={`nav-link${label === 'Sign in' ? ' nav-link-signin' : ''}`} href={path} key={path} aria-current={window.location.pathname === path ? 'page' : undefined} onClick={(event) => go(event, path)}>{label}</a>)}</div>
        <div className="nav-actions">
          <div className={`nav-search${searchOpen ? ' is-open' : ''}`}>
            <button className="icon-button" type="button" aria-label={searchOpen ? 'Close search' : 'Search products'} aria-expanded={searchOpen} aria-controls="product-search-panel" onClick={() => {
              if (searchOpen) {
                setSearchOpen(false)
                setSearchTerm('')
              } else {
                setSearchTerm(new URLSearchParams(window.location.search).get('search') || '')
                setSearchOpen(true)
              }
            }}>⌕</button>
            {searchOpen && <div className="search-panel" id="product-search-panel">
              <form onSubmit={submitSearch}>
                <label className="sr-only" htmlFor="product-search-input">Search products</label>
                <div className="search-input-row"><input ref={searchInput} id="product-search-input" type="search" value={searchTerm} onChange={updateSearch} onKeyDown={handleSearchKeyDown} placeholder="Search products..." autoComplete="off" /><button type="submit" disabled={!searchTerm.trim()}>Search</button></div>
              </form>
            </div>}
          </div>
          <button className="icon-button" type="button" aria-label={`Shopping bag, ${itemCount} items`} onClick={() => navigate('/cart')}>♧<span className="cart-count">{itemCount}</span></button>
        </div>
      </nav>
    </header>
  )
}