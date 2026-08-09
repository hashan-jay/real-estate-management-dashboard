import { FileText } from '../components/Icons'
import { documents } from '../data/mockData'

export default function Documents() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Documents</h1>
          <p>Agreements, inspections, and marketing assets in one place.</p>
        </div>
        <button type="button" className="btn btn-primary">
          Upload
        </button>
      </div>

      <div className="stack">
        {documents.map((doc) => (
          <article className="doc-row" key={doc.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="agent-avatar">
                <FileText size={14} />
              </span>
              <div className="row-main">
                <strong>{doc.name}</strong>
                <p>
                  {doc.type} · {doc.size} · Updated {doc.updated}
                </p>
              </div>
            </div>
            <button type="button" className="btn btn-secondary">
              Open
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
