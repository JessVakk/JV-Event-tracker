import actionTypes from "../actionTypes";
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
        type: actionTypes().event.loadEvent
    }
}

const loadEventSuccess = (event) => {
    return {
        type: actionTypes().event.loadEventSuccess,
        payload: event
    }
}

const loadEventFailure = (err) => {
    return {
        type: actionTypes().event.loadEventFailure,
        payload: err
    }
}
export const clearEvent = () => {
    return {
        type: actionTypes().event.clearEvent
    }
}