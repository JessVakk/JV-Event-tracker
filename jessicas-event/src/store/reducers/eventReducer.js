import actionTypes from "../actionTypes";

const InitState = {
    data: [],
    loading: false,
    error: null
}

const eventReducer = (state = InitState, action) => {
    switch(action.type) {
        case actionTypes().events.loading:
           return {
               ...state,
               loading: action.payload
           }
        case actionTypes().events.setEvents:
            return {
                ...state,
                data: action.payload
            }
            
        default:
            return state
    }
}

export default eventReducer;
