import actiontypes from "../actiontypes";
import axios from 'axios'

export const getEventById = (id) => {
    return async dispatch => {
        dispatch(loadEvent())
      
    }
}

const loadEvent = () => {
    return {
        type: actiontypes().event.loadEvent
    }
}