import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddEventView from './AddEventView'
import EventsView from './EventsView'
import LoginView from './LoginView'
import SingleEventView from './SingleEventView'
import { ProtectedRoute } from '../routes/ProtectedRoute'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element = { 
          <ProtectedRoute>
              <EventsView />
          </ProtectedRoute>
          } /> 
          
        <Route path='/events/:id' element = {
          <ProtectedRoute>
              <SingleEventView />
          </ProtectedRoute>
        } />   

        <Route path='/add' element = { 
        <ProtectedRoute>
            <AddEventView /> 
        </ProtectedRoute>
          } /> 
        <Route path='/login' element = { <LoginView /> } />
        
    </Routes>
  )
}

export default Views