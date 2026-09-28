import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product, navigate, searchMatch = false }) {
  const { addItem } = useCart()
  return (
    <article className={`product-card${searchMatch ? ' is-search-match' : ''}`}>
      <div className="product-image-wrap">
        <button className="icon-button product-open" type="button" aria-label={`View ${product.name}`} onClick={() => navigate(`/products/${product.slug}`)} />
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button className="quick-add" type="button" onClick={() => addItem(product)}>Add to bag · ${product.price}</button>
      </div>
      <div className="product-info"><div><h3>{product.name}</h3><p>{product.category} care</p></div><span className="product-price">${product.price}.00</span></div>
    </article>
  )
}