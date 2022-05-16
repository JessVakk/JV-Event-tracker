import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEventById } from '../store/actions/singleEventActions'
import { useParams } from 'react-router-dom'

const SingleEventView = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getEventById())
    }, [])

  return (
    <div>SingleEventView {id }</div>
  )
}

export default SingleEventView