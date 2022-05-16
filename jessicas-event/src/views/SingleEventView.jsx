import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearEvent, getEventById } from '../store/actions/singleEventActions'
import { useParams } from 'react-router-dom'

const SingleEventView = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getEventById(id))

        return () => {
          dispatch(clearEvent())
          
        }
    
    }, [])

    const { loading, data: event, error} = useSelector(state => state.event)
    
    const template = ( event &&
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>{event.place}</p>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
    )

    if(error)
    return (
      <div>
        <p>{error}</p>
      </div>
    )

  return (
    <div>
      {template}
      {loading && <p>Loading...</p>}
      </div>
  )
}

export default SingleEventView