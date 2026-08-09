import { TrendingUp } from '../Icons'

export default function StatCard({ label, value, change }) {
  return (
    <article className="kpi-card">
      <p className="kpi-label">{label}</p>
      <h3 className="kpi-value">{value}</h3>
      <div className="kpi-change">
        <TrendingUp size={14} />
        {change}% <span>vs last month</span>
      </div>
    </article>
  )
}
