import { marketingCampaigns } from '../data/mockData'

export default function Marketing() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Marketing</h1>
          <p>Campaign performance across channels and lead quality.</p>
        </div>
        <button type="button" className="btn btn-primary">
          New Campaign
        </button>
      </div>

      <div className="stack">
        {marketingCampaigns.map((campaign) => (
          <article className="campaign-row" key={campaign.id}>
            <div className="row-main">
              <h3>{campaign.name}</h3>
              <p>
                {campaign.channel} · Spend {campaign.spend}
              </p>
            </div>
            <div className="stats-inline">
              <span>{campaign.leads} leads</span>
              <span className={`badge ${campaign.status === 'Active' ? 'badge-live' : 'badge-draft'}`}>
                {campaign.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
