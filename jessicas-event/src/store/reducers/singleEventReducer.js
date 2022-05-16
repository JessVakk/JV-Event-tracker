import actiontypes from "../actiontypes";

const initState = {
    data: null,
    loading: false,
    error: null
}

const singleEventReducer = (state = initState, action) => {
    switch(action.type) {
        
        case actiontypes().event.loadEvent:
            return {
                ...state,
                loading: true
            }
        
        case actiontypes().event.loadEventSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }

        case actiontypes().event.loadEventFailure:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload
            }
        
        case actiontypes().event.clearEvent:
            return {
                ...state,
                data: null,
            }

        default:
        return state
    }
}
export default singleEventReducer;