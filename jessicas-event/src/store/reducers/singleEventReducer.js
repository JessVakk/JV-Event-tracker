import actionTypes from "../actionTypes";

const initState = {
    data: null,
    loading: false,
    error: null
}

const singleEventReducer = (state = initState, action) => {
    switch(action.type) {
        
        case actionTypes().event.loadEvent:
            return {
                ...state,
                loading: true
            }
        
        case actionTypes().event.loadEventSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }

        case actionTypes().event.loadEventFailure:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload
            }
        
        case actionTypes().event.clearEvent:
            return {
                ...state,
                data: null,
            }

        default:
        return state
    }
}
export default singleEventReducer;