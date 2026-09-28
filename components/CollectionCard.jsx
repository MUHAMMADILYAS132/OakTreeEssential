export default function CollectionCard({ collection, navigate }) {
  return <button className="collection-card" type="button" onClick={() => navigate(`/shop?category=${encodeURIComponent(collection.category)}`)}><img src={collection.image} alt="" loading="lazy" /><div><h2>{collection.title}</h2><p>{collection.description} <span aria-hidden="true">→</span></p></div></button>
}