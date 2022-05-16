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

        default:
        return state
    }
}
export default singleEventReducer;