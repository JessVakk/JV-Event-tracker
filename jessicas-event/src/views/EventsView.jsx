import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Event from '../components/Event'
import { getEvents } from '../store/actions/eventsAction'

const EventsView = () => {

    const dispatch = useDispatch()
    const { data, loading } = useSelector(state => state.events)

    useEffect(() => {
        dispatch(getEvents())
    }, [])
  return (
    <div>
      
    { loading && <p>Loading....</p> }
    { data.map(event => <Event key={event.id} event={event} /> ) }
    </div>
  )
}

export default EventsView