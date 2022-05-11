import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../store/actions/postsAction'

const EventView = () => {

   const dispatch = useDispatch()

 
   useEffect(() => {
     dispatch(getPosts())
   }, [])

  return (
    <div>EventView</div>
  )
}

export default EventView