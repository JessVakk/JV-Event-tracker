import axios from 'axios'
import actionTypes from '../actionTypes'

export const getEvents = () => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.get('http://localhost:8080/events')
            dispatch(setEvents(res.data))
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }
    }
}

export const addEvent = (event) => {
    return async dispatch => {
        console.log("test")
        dispatch(loading(true))
        try {
            const res = await axios.post('http://localhost:8080/events', event)
            dispatch(addToList(res.data))
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }
    }
    
}

const addToList = (event) => {
    return {
        type: actionTypes().events.addNewItem,
        payload: event
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

const eventsFailure = (payload) => {
    return {
        type: actionTypes().events.failure,
        payload
    }
}