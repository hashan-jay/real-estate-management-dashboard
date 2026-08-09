import { calendarEvents } from '../data/mockData'

export default function CalendarPage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Calendar</h1>
          <p>Tours, open houses, and closing milestones for the week.</p>
        </div>
        <button type="button" className="btn btn-secondary">
          Schedule Event
        </button>
      </div>

      <div className="stack">
        {calendarEvents.map((event) => (
          <article className="event-row" key={event.id}>
            <div className="row-main">
              <h3>{event.title}</h3>
              <p>
                {event.day} · {event.time}
              </p>
            </div>
            <button type="button" className="btn btn-secondary">
              Details
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
