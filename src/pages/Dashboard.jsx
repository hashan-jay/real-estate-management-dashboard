import { CalendarRange } from '../components/Icons'
import StatCard from '../components/dashboard/StatCard'
import FeaturedProperty from '../components/dashboard/FeaturedProperty'
import WeeklySalesChart from '../components/dashboard/WeeklySalesChart'
import MarketOverview from '../components/dashboard/MarketOverview'
import AgentActivityTable from '../components/dashboard/AgentActivityTable'
import {
  agentActivity,
  featuredProperty,
  kpis,
  marketSegments,
  weeklySales,
} from '../data/mockData'

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Track performance, manage listings, and close more deals.</p>
        </div>
        <div className="date-range">
          <CalendarRange size={16} />
          Aug 5 – Aug 9, 2026
        </div>
      </div>

      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <StatCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <section className="dash-grid" style={{ marginBottom: '1rem' }}>
        <FeaturedProperty property={featuredProperty} />
        <WeeklySalesChart data={weeklySales} />
      </section>

      <section className="dash-grid">
        <MarketOverview data={marketSegments} />
        <AgentActivityTable rows={agentActivity} />
      </section>
    </div>
  )
}
