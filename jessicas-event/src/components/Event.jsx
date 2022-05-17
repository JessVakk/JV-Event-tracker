import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
    <div className=" event mt-5 d-flex justify-content-center align-item-center text-center">
        <Link to={`/events/${event.id}`}>
            <h2 className="mt-5 ">{event.title}</h2>
           
        </Link>
    </div>
  )
}

export default Event