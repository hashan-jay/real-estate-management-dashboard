import { deals } from '../data/mockData'

export default function Deals() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Deals</h1>
          <p>Track pipeline stages from touring through closing.</p>
        </div>
        <button type="button" className="btn btn-secondary">
          Export Pipeline
        </button>
      </div>

      <div className="stack">
        {deals.map((deal) => (
          <article className="list-row" key={deal.id}>
            <div className="row-main">
              <h3>
                {deal.property} · {deal.value}
              </h3>
              <p>
                {deal.id} · Buyer: {deal.buyer} · Stage: {deal.stage}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="muted">{deal.probability}%</span>
              <div className="progress" aria-label={`${deal.probability}% probability`}>
                <span style={{ width: `${deal.probability}%` }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
