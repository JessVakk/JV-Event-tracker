import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEvents } from '../store/actions/eventAction'

const HomeView = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEvents())
    }, [])
  return (
    <div>HomeView</div>
  )
}

export default HomeView