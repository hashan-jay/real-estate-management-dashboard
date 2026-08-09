import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function WeeklySalesChart({ data }) {
  return (
    <article className="panel">
      <div className="panel-head">
        <h2>Weekly Sales Overview</h2>
        <span>This week</span>
      </div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d5e0da" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#667870', fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#667870', fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(14, 107, 86, 0.06)' }}
              contentStyle={{
                borderRadius: 12,
                border: '1px solid #d5e0da',
                boxShadow: '0 10px 24px rgba(19,32,25,0.08)',
              }}
            />
            <Bar dataKey="sales" fill="#0E6B56" radius={[8, 8, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
