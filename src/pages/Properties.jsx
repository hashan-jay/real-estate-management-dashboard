import { useState } from 'react'
import { Bath, BedDouble, MapPin, Ruler } from '../components/Icons'
import { properties } from '../data/mockData'

const filters = ['All', 'For Sale', 'For Rent', 'Pending']

function statusClass(status) {
  if (status === 'For Sale') return 'badge-sale'
  if (status === 'For Rent') return 'badge-rent'
  return 'badge-pending'
}

export default function Properties() {
  const [filter, setFilter] = useState('All')
  const visible =
    filter === 'All' ? properties : properties.filter((item) => item.status === filter)

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Properties</h1>
          <p>Browse and manage your full portfolio across markets.</p>
        </div>
        <button type="button" className="btn btn-primary">
          Add Property
        </button>
      </div>

      <div className="filters">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`chip ${filter === item ? 'active' : ''}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="property-grid">
        {visible.map((property) => (
          <article className="property-card" key={property.id}>
            <img src={property.image} alt={property.name} />
            <div className="property-card-body">
              <div className="property-top">
                <span className="muted">{property.id}</span>
                <span className={`badge ${statusClass(property.status)}`}>
                  {property.status}
                </span>
              </div>
              <h3>{property.name}</h3>
              <p className="address">
                <MapPin size={14} />
                {property.location} · {property.type}
              </p>
              <p className="price" style={{ margin: '0.55rem 0' }}>
                {property.price}
              </p>
              <div className="specs">
                <span className="spec">
                  <BedDouble size={14} /> {property.beds}
                </span>
                <span className="spec">
                  <Bath size={14} /> {property.baths}
                </span>
                <span className="spec">
                  <Ruler size={14} /> {property.sqft}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
