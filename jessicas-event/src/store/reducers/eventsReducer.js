import actiontypes from "../actiontypes";

const initState = {
   data: [],
    loading: false,
    error: null
}

const eventsReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().events.loading:
            return {
                ...state,
                loading: action.payload
            }
        
        case actiontypes().events.setEvents:
            return {
                ...state,
                data: action.payload
            }

        default:
        return state
    }
}
export default eventsReducer;