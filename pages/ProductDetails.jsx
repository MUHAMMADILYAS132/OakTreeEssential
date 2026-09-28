import { useState } from 'react'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetails({ slug, navigate }) {
  const product = products.find((item) => item.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  if (!product) return <div className="page-width not-found"><strong>404</strong><h2>We couldn't find that essential.</h2><button className="button" type="button" onClick={() => navigate('/shop')}>Back to the shop</button></div>
  return <div className="page-width details-layout"><img className="details-image" src={product.image} alt={product.name} /><div className="details-copy"><p className="eyebrow">{product.category} care · Thoughtfully made</p><h1>{product.name}</h1><p className="details-price">${product.price}.00</p><p>{product.description}</p><div className="quantity-row"><span>Quantity</span><div className="quantity-control"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span>{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}>+</button></div></div><button className="button" type="button" onClick={() => addItem(product, quantity)}>Add to bag · ${(product.price * quantity).toFixed(2)}</button><p style={{ marginTop: 20 }}>Made for everyday use. Thoughtfully selected ingredients, considered from the first drop to the last.</p></div></div>
}