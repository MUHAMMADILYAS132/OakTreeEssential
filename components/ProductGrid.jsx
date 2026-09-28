import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, navigate, searchTerm = '' }) {
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} navigate={navigate} searchMatch={Boolean(searchTerm)} />)}</div>
}