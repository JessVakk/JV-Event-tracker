import axios from 'axios'
import actionTypes from '../actionTypes'

export const getPosts = () => {
      return async dispatch => {
          dispatch(loading(true))
          const res = await axios.get('http//localhost:8080/posts')
          dispatch(setPosts(res.data))
      }
}
const loading = () => {
    return{
    type: actionTypes().posts.loading
    }
}

const setPosts =(posts) => {
    return {
        type: actionTypes().posts.setPosts,
        payload: posts
    }
}