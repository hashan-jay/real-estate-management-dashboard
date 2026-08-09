import { messages } from '../data/mockData'

export default function Messages() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Messages</h1>
          <p>Client conversations and agent follow-ups in one inbox.</p>
        </div>
      </div>

      <div className="stack">
        {messages.map((message) => (
          <article className="message-row" key={message.id}>
            <div className="row-main">
              <strong>{message.from}</strong>
              <p>{message.preview}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <span className="muted">{message.time}</span>
              {message.unread ? <span className="unread" aria-label="Unread" /> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
