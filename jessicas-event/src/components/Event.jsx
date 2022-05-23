import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
    <div className=" card container mt-5  bg-custom-color col-8">
        <Link to={`/events/${event.id}`}>
          <div className='text-start d-flex align-item-center'>
            <h4 className="ps-3 mt-3 mb-3 text-dark  ">{event.title}</h4>
            </div>
        </Link>
    </div>
  )
}

export default Event