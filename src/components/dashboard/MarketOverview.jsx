import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function MarketOverview({ data }) {
  return (
    <article className="panel">
      <div className="panel-head">
        <h2>Market Overview</h2>
        <span>By region</span>
      </div>
      <div className="market-layout">
        <div className="chart-wrap" style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={3}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: '1px solid #d5e0da',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="legend">
          {data.map((item) => (
            <div className="legend-item" key={item.name}>
              <div className="legend-left">
                <span className="swatch" style={{ background: item.color }} />
                <span>{item.name}</span>
              </div>
              <strong>{item.value}%</strong>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
