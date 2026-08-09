export default function AgentActivityTable({ rows }) {
  return (
    <article className="panel">
      <div className="panel-head">
        <h2>Agent Activity</h2>
        <span>Latest updates</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Activity</th>
              <th>Property</th>
              <th>Client</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className="agent-cell">
                    <span className="agent-avatar">{row.avatar}</span>
                    {row.agent}
                  </div>
                </td>
                <td>{row.activity}</td>
                <td>{row.property}</td>
                <td>{row.client}</td>
                <td>{row.date}</td>
                <td>
                  <span
                    className={`badge ${
                      row.status === 'Completed' ? 'badge-done' : 'badge-pending'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
