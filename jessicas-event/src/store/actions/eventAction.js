import axios from 'axios'
import actionTypes from '../actionTypes'

export const getEvents = () => {
    return async dispatch => {
        dispatch(loading(true))
        const res = await axios.get('http://localhost:8080/events')
        dispatch(setEvents(res.data))
    }
}
const loading = (payload) => {
    return {
       type: actionTypes().events.loading,
       payload 
    }
}

const setEvents = (events) => {
    return {
        type: actionTypes().events.setEvents,
        payload: events
    }   
}