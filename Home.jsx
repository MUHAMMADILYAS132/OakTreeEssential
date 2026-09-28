import Hero from '../components/Hero.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import FeaturedCollection from '../components/FeaturedCollection.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { products } from '../data/products.js'

export default function Home({ navigate }) {
  return <><Hero navigate={navigate} /><div className="trust-strip"><div className="trust-item"><span>✳</span> Thoughtful ingredients</div><div className="trust-item"><span>♧</span> Made with intention</div><div className="trust-item"><span>↺</span> Everyday, made better</div></div><section className="section page-width"><div className="section-heading"><div><p className="eyebrow">The ones you come back to</p><h2>Everyday favourites</h2></div><button className="text-link" type="button" onClick={() => navigate('/shop')}>Shop all essentials →</button></div><ProductGrid products={products.slice(0, 4)} navigate={navigate} /></section><div className="page-width"><FeaturedCollection navigate={navigate} /></div><section className="section page-width"><div className="section-heading"><div><p className="eyebrow">Good care, no fuss</p><h2>Made for your rhythm</h2></div><button className="text-link" type="button" onClick={() => navigate('/shop')}>Discover the range →</button></div><ProductGrid products={products.slice(4, 8)} navigate={navigate} /></section><Newsletter /></>
}