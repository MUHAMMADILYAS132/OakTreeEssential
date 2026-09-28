import CollectionCard from '../components/CollectionCard.jsx'
import { collections } from '../data/products.js'

export default function Collections({ navigate }) {
  return <div className="page-width"><header className="page-heading"><p className="eyebrow">Find your kind of care</p><h1>Collections</h1><p>Thoughtful little edits for whatever your everyday looks like.</p></header><div className="collection-grid">{collections.map((collection) => <CollectionCard key={collection.title} collection={collection} navigate={navigate} />)}</div></div>
}