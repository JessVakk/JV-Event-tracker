import axios from 'axios'
import actionTypes from '../actionTypes'
// import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

const apiCall = (url, user, dispatch) => {
  axios.post(url, user)
  .then(res => {
    // console.log(res.data)
    dispatch(authSuccess(res.data.accessToken))
  })
  .catch(err => dispatch(authFailure(err.message)))
}


export const registerUser = (user) => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:8080/register', user, dispatch)
  }
}

export const loginUser = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:8080/login', user, dispatch)
  }
}

export const logoutUser = () => {
  return {
    type: actionTypes().auth.logout
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    if(token) {
      if(jwt_decode(token).exp * 1000 > Date.now()) {
        dispatch(authSuccess(token))
      } else {
        localStorage.removeItem('token')
      }
    }
  }
}

const loading = () => {
  return {
    type: actionTypes().auth.loading
  }
}

const authFailure = (err) => {
  return {
    type: actionTypes().auth.authFailure,
    payload: err
  }
}

const authSuccess = token => {
  return {
    type: actionTypes().auth.authSuccess,
    payload: token
  }
}