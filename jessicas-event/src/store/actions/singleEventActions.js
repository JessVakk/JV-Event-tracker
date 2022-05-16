import actiontypes from "../actiontypes";
import axios from 'axios'

export const getEventById = (id) => {
    return async dispatch => {
        dispatch(loadEvent())
      
        try {
            const res = await axios.get('http://localhost:8080/events/' + id)
            dispatch(loadEventSuccess(res.data))
        }
        catch (err) {
            dispatch(loadEventFailure(err.message))
        }
    }
}

const loadEvent = () => {
    return {
        type: actiontypes().event.loadEvent
    }
}

const loadEventSuccess = (event) => {
    return {
        type: actiontypes().event.loadEventSuccess,
        payload: event
    }
}

const loadEventFailure = (err) => {
    return {
        type: actiontypes().event.loadEventFailure,
        payload: err
    }
}