import actionTypes from "../actionTypes";

const initState = {
   data: [],
    loading: false,
    error: null
}

const eventsReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes().events.loading:
            return {
                ...state,
                loading: action.payload
            }
        
        case actionTypes().events.setEvents:
            return {
                data: action.payload,
                loading: false,
                error: null
                
            }

        case actionTypes().events.failure:
            return {
                data: [],
                loading: false,
                error: action.payload
            }

        case actionTypes().events.addNewItem:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false,
                error: null
            }   

        default:
        return state
    }
}
export default eventsReducer;