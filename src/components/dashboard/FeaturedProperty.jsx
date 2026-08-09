import { Bath, BedDouble, MapPin, Ruler } from '../Icons'

export default function FeaturedProperty({ property }) {
  return (
    <article className="panel featured-property">
      <div className="featured-media">
        <span className="badge badge-new">{property.badge}</span>
        <img src={property.image} alt={property.title} />
      </div>
      <div className="featured-body">
        <div className="featured-meta">
          <span className="price">{property.price}</span>
          <span className="badge badge-sale">{property.status}</span>
        </div>
        <h3>{property.title}</h3>
        <p className="address">
          <MapPin size={14} />
          {property.address}
        </p>
        <div className="specs">
          <span className="spec">
            <BedDouble size={14} /> {property.beds} Beds
          </span>
          <span className="spec">
            <Bath size={14} /> {property.baths} Baths
          </span>
          <span className="spec">
            <Ruler size={14} /> {property.sqft} sq ft
          </span>
        </div>
      </div>
    </article>
  )
}
