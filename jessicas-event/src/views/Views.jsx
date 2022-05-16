import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventsView from './EventsView'
import SingleEventView from './SingleEventView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element = { <EventsView /> } />
        <Route path='/events/:id' element = { <SingleEventView /> } />
    </Routes>
  )
}

export default Views