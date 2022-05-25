import actionTypes from "../actionTypes";

const initState = {
  token: null,
  loading: false,
  error: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {

    case actionTypes().auth.loading:
      return {
        ...state,
        loading: true
      }

    case actionTypes().auth.authFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case actionTypes().auth.authSuccess:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload
      }

    case actionTypes().auth.logout:
      localStorage.removeItem('token')
      return {
        ...initState
      }

    default:
      return state
  }
}

export default authReducer;