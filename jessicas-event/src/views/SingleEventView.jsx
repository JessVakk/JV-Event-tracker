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
    
    }, [dispatch, id])

    const { loading, data: event, error} = useSelector(state => state.event)
    
    const template = ( event &&
      <div className=" card container mt-5 col-3 bg-custom-color col-8">
        <div className=''>
          <h2 className='text-center ps-2 mt-3 mb-4 '>{event.title}</h2>
          <p className='text-center ps-2 mt-3 mb-2' >Description: <span className='h5'>{event.description}</span></p>
          <p className='text-center ps-2 mt-3 mb-2' >Place: <span className='h5'>{event.place}</span></p>
          <p className='text-center ps-2 mt-3 mb-2' >Date: <span className='h5'>{event.date}</span></p>
          <p className='text-center ps-2 mt-3 mb-5' >Time: <span className='h5'>{event.time}</span></p>
        </div>
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