import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNewEvent from './AddNewEvent'
import HomeView from './HomeView'



const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView />} />
        <Route path='/' element={ <AddNewEvent /> } />
        
    </Routes>
  )
}

export default Views