import actionTypes from "../actionTypes";

const initState= {
data: [],
loading: false,
error: null
}

const postsReducer = (state=initState, action) => {
    switch(action.type){
        case actionTypes().posts.loading:
            return {
                ...state,
                loading: action.payload
            }
    default:
        return state
    }
}

export default postsReducer;