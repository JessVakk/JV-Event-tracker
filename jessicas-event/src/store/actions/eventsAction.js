import axios from 'axios'
import actiontypes from '../actiontypes'

export const getEvents = () => {
    return async dispatch => {
        dispatch(loading(true))
        const res = await axios.get('http://localhost:8080/events')
        dispatch(setEvents(res.data))
    }
}

const loading = (payload) => {
    return {
       type: actiontypes().events.loading,
       payload
    }
}

const setEvents = (events) => {
    return {
        type: actiontypes().events.setEvents,
        payload: events
    }
}

const eventsFailure = (payload) => {
    return {
        type: actiontypes().events.failure,
        payload
    }
}