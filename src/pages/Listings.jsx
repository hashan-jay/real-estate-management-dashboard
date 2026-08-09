import { listings } from '../data/mockData'

function statusClass(status) {
  if (status === 'Live') return 'badge-live'
  if (status === 'Review') return 'badge-review'
  return 'badge-draft'
}

export default function Listings() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Listings</h1>
          <p>Monitor listing health, inquiries, and publication status.</p>
        </div>
        <button type="button" className="btn btn-primary">
          Create Listing
        </button>
      </div>

      <div className="stack">
        {listings.map((listing) => (
          <article className="list-row" key={listing.id}>
            <div className="row-main">
              <h3>{listing.title}</h3>
              <p>
                {listing.id} · Managed by {listing.agent}
              </p>
            </div>
            <div className="stats-inline">
              <span>{listing.views.toLocaleString()} views</span>
              <span>{listing.inquiries} inquiries</span>
            </div>
            <span className={`badge ${statusClass(listing.status)}`}>{listing.status}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
