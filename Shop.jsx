import { useState } from 'react'
import ProductGrid from '../components/ProductGrid.jsx'
import { products } from '../data/products.js'

const categories = ['All', 'Face', 'Body', 'Bath']

export default function Shop({ navigate, searchTerm = '' }) {
  const initial = new URLSearchParams(window.location.search).get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initial) ? initial : 'All')
  const query = searchTerm.trim().toLowerCase()
  const shown = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    const matchesSearch = !query || product.name.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  return <div className="page-width shop-page">
    <header className="page-heading">
      <p className="eyebrow">{query ? 'Product search' : 'Good things for every day'}</p>
      <h1>{query ? `Matches for “${searchTerm.trim()}”` : 'The essentials'}</h1>
      <p>{query ? 'Matching essentials from our everyday collection.' : 'Considered care for face, body, and the little moments in between.'}</p>
    </header>
    <div className="shop-toolbar">
      <div className="filter-list" aria-label="Filter products by category">{categories.map((item) => <button className={`filter-button${category === item ? ' active' : ''}`} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <div className="shop-result-count" aria-live="polite"><span>{shown.length} {query ? 'matches' : 'essentials'}</span>{query && <button className="text-link" type="button" onClick={() => navigate('/shop')}>Clear search</button>}</div>
    </div>
    {shown.length ? <ProductGrid products={shown} navigate={navigate} searchTerm={query} /> : <div className="search-no-results"><h2>No matching products</h2><p>Try another product name or clear your search to browse everything.</p><button className="button button-outline" type="button" onClick={() => navigate('/shop')}>View all essentials</button></div>}
  </div>
}