import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddEventView from './AddEventView'
import EventsView from './EventsView'
import LoginView from './LoginView'
import SingleEventView from './SingleEventView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element = { <EventsView /> } />
        <Route path='/events/:id' element = { <SingleEventView /> } />
        <Route path='/add' element = { <AddEventView /> } />
        <Route path='/login' element = { <LoginView /> } />
        
    </Routes>
  )
}

export default Views