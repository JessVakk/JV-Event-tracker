import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'


const AddEventView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading  = useSelector(state => state.events.loading)

 const [eventAdded, setEventAdded] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    place: '',
    date: '',
    time: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
      
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(addEvent(formData))
    setEventAdded(true)
  }

  useEffect(() => {
    if(!loading && eventAdded) {
      navigate('/')
    }
  }, [loading, eventAdded, navigate])

  return (
          <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded'>
          <h2  className='text-center mb-4'>Add Event</h2>
          <form onSubmit={handleSubmit} className='pe-5 ps-5 d-flex justify-content-center'>
            <div className="row">
              <div className="col-lg-12 mb-4 pe-lg-2" >
              <label htmlFor="title">Title: </label>
              <input type="text" id='title' name='title' onChange={onChange} value={formData.title} className='form-control' />
              </div> 
              <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2" >
                <label htmlFor="date">Date: </label>
                <input type="date" id='date' name='date' onChange={onChange} value={formData.date} className='form-control' />       
              </div>
              <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2">
                <label htmlFor="time">Time: </label>       
                <input type="time" id='time' name='time' onChange={onChange} value={formData.time} className='form-control' />
              </div>
              <div className="col-lg-12  mb-4 pe-lg-2">
              <label htmlFor="eventDesc">Event description: </label>       
                <textarea type="text" id='description' name='description' onChange={onChange} value={formData.description} className='form-control' />
              </div>
              
           
              <div>
                <button className='mb-4 btn btn-block text-light gradient-color'> { loading ?'Loading...': 'Add Event'}</button>
              </div>
              
              </div>
            </form>
          
            
        </div>
        
  )
}

export default AddEventView