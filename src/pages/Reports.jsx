import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const revenueTrend = [
  { month: 'Mar', revenue: 2.1 },
  { month: 'Apr', revenue: 2.4 },
  { month: 'May', revenue: 2.8 },
  { month: 'Jun', revenue: 3.1 },
  { month: 'Jul', revenue: 3.3 },
  { month: 'Aug', revenue: 3.58 },
]

const conversion = [
  { label: 'Leads', value: 420 },
  { label: 'Tours', value: 186 },
  { label: 'Offers', value: 94 },
  { label: 'Closed', value: 121 },
]

export default function Reports() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p>Portfolio analytics built for forecasting into 2026 and beyond.</p>
        </div>
      </div>

      <section className="dash-grid">
        <article className="panel">
          <div className="panel-head">
            <h2>Revenue Trend</h2>
            <span>$M</span>
          </div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d5e0da" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0E6B56"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#0E6B56' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <h2>Conversion Funnel</h2>
            <span>YTD</span>
          </div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversion} barSize={34}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d5e0da" />
                <XAxis dataKey="label" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#2A6F97" radius={[8, 8, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>
    </div>
  )
}
