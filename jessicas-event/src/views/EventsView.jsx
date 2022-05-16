import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getEvents } from '../store/actions/eventsAction'

const EventsView = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEvents())
    }, [])
  return (
    <div>EventsView</div>
  )
}

export default EventsView