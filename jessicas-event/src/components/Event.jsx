import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
    <div className="event">
        <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
           
        </Link>
    </div>
  )
}

export default Event